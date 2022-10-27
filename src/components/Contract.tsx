import { useFormikContext } from "formik";
import { ApiContext, SubmitInfoRequestBody } from "hooks/ApiContext";
import { useContext, useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import {Grid, Typography, Skeleton } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { IconButton } from "@material-ui/core";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const useStyles = makeStyles({
  pdf: {
    height: 800,
    width: 600,
    borderWidth: "0.2px",
    borderColor: "grey",
    borderStyle: "solid",
    overflowX: "hidden",
    margin: 20,
  },
});

export const Contract = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { submitInfo } = useContext(ApiContext);
  const { values } = useFormikContext<SubmitInfoRequestBody>();
  const [pdfURL, setPdfURL] = useState("");
  const classes = useStyles();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString();
  };
  async function sendFormData() {
    const extendedValues = values;
    extendedValues.currentDate = getCurrentDate();
    const file = await submitInfo(extendedValues);
    setPdfURL(window.URL.createObjectURL(file));
    setIsLoading(false);
  }
  useEffect(() => {
    sendFormData();
  }, []);
  return isLoading ? (
    <div className={classes.pdf}> <Skeleton variant="rectangular" width={600} height={800} /></div>

  ) : (
    <>
      <div className={classes.pdf}>
        <Document
          file={pdfURL}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<></>}
        >
          <Page pageNumber={pageNumber} height={900} />
        </Document>
      </div>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="overline">
            <IconButton onClick={previousPage} disabled={pageNumber <= 1}>
              <ArrowBackIosNewIcon />
            </IconButton>
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            <IconButton onClick={nextPage} disabled={pageNumber > 2}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default Contract;
