import { Grid, Typography } from "@mui/material";
import { useCallback } from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useDropzone } from "react-dropzone";

function DropBox() {
  const onDrop = useCallback((acceptedFiles: unknown) => {
    console.log(acceptedFiles);
    // temporary
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Typography variant="subtitle2" sx={{ marginTop: 1 }}>
          Upuść swoje pliki tutaj
        </Typography>
      ) : (
        <Grid
          container
          flexDirection="column"
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DriveFolderUploadIcon fontSize="large" color="disabled" />
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
        </Grid>
      )}
    </div>
  );
}
export default DropBox;
