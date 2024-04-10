import { useState } from "react";
import {
  Paper,
  List,
  ListItem,
  Checkbox,
  FormControlLabel,
  IconButton,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Category = ({
  title,
  tasks,
  onToggleTask,
  onAddTaskClick,
  onDeleteCompleted,
}) => {
  const [showActions, setShowActions] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleDeleteClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmDelete = () => {
    onDeleteCompleted();
    handleCloseDialog();
  };
  return (
    <Paper
      elevation={2}
      sx={{
        margin: 2,
        padding: 2,
        width: "30%",
        minHeight: "60vh",
        maxHeight: "60vh",
        maxWidth: "30vh",
        minWidth: "30vh",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          "& .action-icons": {
            opacity: 1,
            transition: "opacity 300ms ease-in-out",
          },
        },
      }}
      onMouseOver={() => setShowActions(true)}
      onMouseOut={() => setShowActions(false)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" component="h2">
          {title}
        </Typography>
        <div className="action-icons" style={{ opacity: showActions ? 1 : 0 }}>
          <IconButton onClick={() => onAddTaskClick(title)} size="small">
            <AddCircleOutlineIcon />
          </IconButton>
          <IconButton onClick={handleDeleteClick} size="small">
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <List sx={{ overflow: "auto" }}>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            dense
            onClick={() => onToggleTask(title, index)}
          >
            <FormControlLabel
              control={<Checkbox checked={task.completed} />}
              label={
                <Typography
                  sx={{
                    wordBreak: "break-word",
                  }}
                >
                  {task.description}
                </Typography>
              }
              sx={{ mr: 0, width: "100%" }}
            />
          </ListItem>
        ))}
      </List>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete all completed tasks in this
            category?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default Category;
