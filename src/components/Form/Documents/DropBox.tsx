import { Typography } from "@mui/material";
import { useCallback } from "react";
import { makeStyles } from "@material-ui/core";
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
    backgroundColor: "white",
    marginBottom: 50,
  },
});
function DropBox() {
  const classes = useStyles();
  const onDrop = useCallback((acceptedFiles: unknown) => {
    console.log(acceptedFiles);
    // temporary
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
