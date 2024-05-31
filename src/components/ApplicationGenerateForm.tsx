"use client";

import { FormControl } from "@mui/base";
import { Box, Button, InputLabel, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

import { MAX_LENGTH_DETAILS, MIN_LENGTH_VALID } from "@/lib/constans";

const validationSchema = yup.object({
  jobTitle: yup.string().min(MIN_LENGTH_VALID).required(),
  company: yup.string().min(MIN_LENGTH_VALID).required(),
  skills: yup.string().min(MIN_LENGTH_VALID).required(),
  details: yup
    .string()
    .min(MIN_LENGTH_VALID)
    .max(MAX_LENGTH_DETAILS)
    .required(),
});

export const ApplicationGenerateForm = () => {
  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      company: "",
      skills: "",
      details: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box component="form" noValidate onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <Box flex={1}>
            <FormControl>
              <InputLabel component="label">Job title</InputLabel>
              <TextField
                fullWidth
                name="jobTitle"
                id="jobTitle"
                value={formik.values.jobTitle}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.jobTitle && Boolean(formik.errors.jobTitle)
                }
                helperText={formik.touched.jobTitle && formik.errors.jobTitle}
                placeholder="Product manager"
              />
            </FormControl>
          </Box>
          <Box flex={1}>
            <FormControl>
              <InputLabel component="label">Company</InputLabel>
              <TextField
                id="company"
                name="company"
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.company && Boolean(formik.errors.company)}
                helperText={formik.touched.company && formik.errors.company}
                fullWidth
                placeholder="Apple"
              />
            </FormControl>
          </Box>
        </Stack>
        <FormControl>
          <InputLabel component="label">I am good at...</InputLabel>
          <TextField
            fullWidth
            id="skills"
            name="skills"
            value={formik.values.skills}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.skills && Boolean(formik.errors.skills)}
            helperText={formik.touched.skills && formik.errors.skills}
            placeholder="HTML, CSS and doing things in time"
          />
        </FormControl>
        <FormControl>
          <InputLabel component="label">Additional details</InputLabel>
          <TextField
            multiline
            id="details"
            name="details"
            value={formik.values.details}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              (formik.touched.details && Boolean(formik.errors.details)) ||
              formik.values.details.length > MAX_LENGTH_DETAILS
            }
            helperText={`${formik.values.details.length}/${MAX_LENGTH_DETAILS}`}
            rows={8}
            fullWidth
            placeholder="Describe why you are a great fit or paste your bio"
          />
        </FormControl>
        <Button
          color="primary"
          size="customLarge"
          fullWidth
          type="submit"
          disabled={!formik.isValid || !formik.dirty}
        >
          Generate Now
        </Button>
      </Stack>
    </Box>
  );
};
