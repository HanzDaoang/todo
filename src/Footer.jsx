import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Paper,
} from "@mui/material";

const Footer = ({
  categories,
  onAdd,
  selectedCategory,
  setSelectedCategory,
  inputRef,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (data.task) {
      onAdd(data.task, selectedCategory);
      reset();
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10%",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          width: "50%",
          padding: 1,
        }}
      >
        <TextField
          {...register("task", { required: "Task description is required." })}
          label="Type here..."
          variant="outlined"
          error={!!errors.task}
          helperText={errors.task?.message}
          sx={{ flex: 2, marginRight: 2 }}
          inputRef={inputRef}
        />
        <FormControl sx={{ flex: 1, marginRight: 2 }}>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category-select"
            value={selectedCategory}
            label="Category"
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            {categories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" type="submit" size="large">
          ADD
        </Button>
      </Box>
    </Paper>
  );
};

export default Footer;
