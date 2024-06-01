"use client";

import React, { useState } from "react";

import { FormControl } from "@mui/base";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import {
  Box,
  Button,
  CircularProgress,
  InputLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

import { MAX_LENGTH_DETAILS, MIN_LENGTH_VALID } from "@/lib/constans";
import { generateText } from "@/lib/generateText";
import { template } from "@/lib/templates";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      company: "",
      skills: "",
      details: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (isLoading) return;
      setIsLoading(true);
      setTimeout(() => {
        const letter = generateText(template, values);
        const letters = JSON.parse(localStorage.getItem("letters") || "[]");
        letters.push(letter);
        localStorage.setItem("letters", JSON.stringify(letters));
        console.log(letters);
        setIsLoading(false);
        setIsGenerated(true);
      }, 100);
    },
  });

  const handleReset = () => {
    formik.resetForm();
    setIsGenerated(false);
  };

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
        {!isGenerated ? (
          <Button
            color="primary"
            size="customLarge"
            fullWidth
            type="submit"
            disabled={!formik.isValid || !formik.dirty}
          >
            {isLoading ? <CircularProgress size={24} /> : "Generate Now"}
          </Button>
        ) : (
          <Button
            variant="outlined"
            size="large"
            fullWidth
            onClick={handleReset}
            disabled={!formik.isValid || !formik.dirty}
            startIcon={<CachedOutlinedIcon />}
          >
            Try Again
          </Button>
        )}
      </Stack>
    </Box>
  );
};
