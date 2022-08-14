import { Typography } from "@mui/material";
import { useCallback } from "react";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useDropzone } from "react-dropzone";

const useStyles = makeStyles({
  boxStyle: {
    width: 400,
    height: 200,
    border: "2px dotted grey",
    borderRadius: 30,
    marginLeft: 85,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
function DropBox() {
  const classes = useStyles();
  const [files, setFiles] = useState([])
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={classes.boxStyle}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Typography variant="subtitle2" sx={{ marginTop: 1 }}>
          Upuść swoje pliki tutaj
        </Typography>
      ) : (
        <>
          <Typography variant="subtitle2" sx={{ marginTop: 1 }}>
            Przeciągnij i upuść swoje pliki tutaj
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{ color: "primary.main", fontWeight: "bold" }}
          >
            lub przeglądaj pliki na swoim dysku
          </Typography>
          <DriveFolderUploadIcon fontSize="large" color="disabled" />
        </>
      )}
    </div>
  );
}
export default DropBox;
