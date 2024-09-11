import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  colors,
  Container,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
import { Box, width } from "@mui/system";
import Header from "../component/Header";
import IconPlus from "../assets/IconPlus";
import { accordionData } from "../data/accordion";
import { useEffect, useState } from "react";
import IconMinus from "../assets/IconMinus";

const AppLayout = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpanded = (event, expanded, itemId) => {
    console.log(event, expanded);
    // if expanded is true, then set isExpanded to itemId, else set it to false
    setIsExpanded(expanded ? itemId : false);
  };
  console.log(isExpanded);
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Header />
      <Container
        // maxWidth="sm"
        sx={{
          backgroundColor: "neutral.main",
          padding: "2rem 1rem",

          borderRadius: "1rem",
          position: "absolute",
          top: "20%",
          right: 0,
          left: 0,

          //   bottom: "20%",
          maxWidth: { md: "37.5%", xs: "80%" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "flex-start",
            marginBottom: "2rem",
          }}
        >
          <Icon sx={{ width: "2.5rem", height: "2.5rem" }}>
            {/* <StarIcon
              sx={{ width: "2rem", height: "2rem", color: "primary.main" }}
            /> */}
            <img src="/icon-star.svg" alt="star" width="100%" height="100%" />
          </Icon>
          <Typography variant="h3" color="primary.dark" fontWeight="bold">
            FAQs
          </Typography>
        </Box>
        <Box
          sx={{
            padding: " 0 1rem",
            "& .MuiAccordion-root::before": { backgroundColor: "#f9f0ff" },
            "& .MuiAccordionSummary-root": {
              padding: 0,
            },
          }}
        >
          {accordionData.map((item) => {
            return (
              <Accordion
                key={item.id}
                disableGutters={true}
                expanded={isExpanded === item.id}
                className={`accordion${item.id}`}
                sx={{
                  width: "100%",
                  boxShadow: "none",
                  padding: "1rem 0",

                  //   "& .MuiAccordionSummary-root": {
                  //     padding: 0,
                  //   },
                }}
                onChange={(event, expanded) =>
                  handleExpanded(event, expanded, item.id)
                }
              >
                <AccordionSummary
                  expandIcon={
                    isExpanded === item.id ? <IconMinus /> : <IconPlus />
                  }
                  aria-controls="panel1-content"
                  id={`panel${item.id}-header`}
                >
                  <Typography
                    sx={{
                      color: "primary.dark",
                      fontWeight: 600,
                      fontSize: "1rem",
                      textDecoration: "none",
                      "&:hover": { color: "#AD28EB" },
                    }}
                  >
                    {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    color: "primary.main",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                    padding: 0,
                    // borderBottomWidth: "1px",
                    // borderBottomStyle: "solid",
                    // borderBottomColor: "primary.light",
                  }}
                >
                  {item.summary}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default AppLayout;
