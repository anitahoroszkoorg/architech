import { useFormikContext } from "formik";
import { ApiContext, SubmitInfoRequestBody } from "hooks/ApiContext";
import { useContext, useEffect, useState } from "react";
import { Document, Page} from "react-pdf/dist/esm/entry.webpack";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  pdf: {
    height: 800,
    width: "550",
    borderWidth: "1px",
    borderStyle: "solid",
    overflow: "hidden",
    margin: 20,
  },
});

export const Contract = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const { submitInfo } = useContext(ApiContext);
  const { values } = useFormikContext<SubmitInfoRequestBody>();
  const [pdfURL, setPdfURL] = useState("");
  const classes = useStyles();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  function onDocumentLoadProgress() {
    return <div>please wait</div>;
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
  }
  useEffect(() => {
    sendFormData();
  }, []);
  return (
    <>
      <div className={classes.pdf}>
        <Document
          file={pdfURL}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadProgress={onDocumentLoadProgress}
          renderMode="canvas"
        >
          <Page pageNumber={pageNumber} renderMode="canvas" height={900} />
        </Document>
      </div>
      <Grid container justifyContent="flex-end">
        <Grid item xs={5}>
          <Typography variant="overline">
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="outlined"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous page
          </Button>
          <Button
            variant="outlined"
            onClick={nextPage}
            disabled={pageNumber > 2}
          >
            Next page
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default Contract;
