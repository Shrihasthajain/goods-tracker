import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Button,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Slider,
  Switch,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FmdBadIcon from "@mui/icons-material/FmdBad";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FilterListIcon from "@mui/icons-material/FilterList";
import { IconButton } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import InputAdornment from "@mui/material/InputAdornment";
import "./findloads.css";

function FindLoads() {
  const [activeCard, setActiveCard] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [weight, setWeight] = useState(0);
  const [price, setPrice] = useState([10000, 50000]);

  const loads = [
    { id: 1, status: "completed" },
    { id: 2, status: "ongoing" },
    { id: 3, status: "ongoing" },
  ];

  return (
    <Box className="findloads-wrapper">
      <Box className="findloads-header">
        <Typography variant="h6" fontWeight="bold">
          Find Loads
        </Typography>

     {!showFilter && (
        <IconButton
            onClick={() => setShowFilter(true)}
            className="filter-icon-btn">
            <FilterListIcon />
        </IconButton>
        )}
      </Box>

      {!showFilter && (
        <>
          <Box className="center-block">
            <FormControl fullWidth size="small" className="dropdown">
              <Select Value="all">
                <MenuItem value="all">All Loads</MenuItem>
                <MenuItem value="ka16">KA16 Y 1234</MenuItem>
                <MenuItem value="Ka19">KA19 Z 1324</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box className="center-block">
            <Typography fontWeight={600} mb={1}>
              Find Nearby Loads
            </Typography>
            <Box className="nearby-chips">
              {["50 km", "100 km", "150 km", "200 km"].map((km) => (
                <Chip
                  key={km}
                  label={km}
                  variant="outlined"
                  className="nearby-chip"
                />
              ))}
            </Box>
          </Box>

          <div className="loads-column">
            {loads.map((load, index) => (
              <div className="load-card-wrapper" key={load.id}>

    <Card
        onClick={() => setActiveCard(index)}
        className={`load-card ${activeCard === index ? "active" : ""}`}
        >
        <CardContent className="card-content">
            <Box className="card-top-right">
            <Typography variant="body2">
                Load added 4 hours ago
            </Typography>

            <Button
                size="small"
                className={`status-btn ${load.status}`}
            >
                {load.status}
            </Button>
            </Box>

            <Typography fontWeight={600}>
            Trip Route
            </Typography>

            <Box className="route-block">
            <Box className="route-row">
                <LocationOnIcon fontSize="small" color="success" />
                <Typography variant="body2">
                Loading: Hiriyur
                </Typography>
            </Box>

            <Box className="route-row">
                <FmdBadIcon fontSize="small" color="error"/>
                <Typography variant="body2">
                Unloading: Chitradurga
                </Typography>
            </Box>
            </Box>

            <Box className="details-block">
            <Typography variant="body2">
                <strong>Material:</strong> Cement Bags | 20 Ton
            </Typography>

            <Typography variant="body2">
                <strong>Vehicle:</strong> Open Full Body (Open Body)
            </Typography>

            <Typography variant="body2">
                <strong>Tyres:</strong> 10 | <strong>Time:</strong> Today 3 PM
            </Typography>
            </Box>

            <Typography variant="body2" className="price-row">
            <strong>Price:</strong>
            <CurrencyRupeeIcon className="price-icon" />
            <span className="price-amount"><strong>32,007.043</strong></span>
            </Typography>

            <Button fullWidth className="view-btn">
            View Details
            </Button>

        </CardContent>
        </Card>

              </div>
            ))}
          </div>
        </>
      )}

      {showFilter && (
        <Card className="filter-card">
          <CardContent sx={{ p: 3 }}>

         <Typography fontWeight={900} className="heading">
              Filter Loads
            </Typography>
         
            <Typography fontWeight={700} sx={{ mb: 2 }}>
              Route Details
            </Typography>

        <TextField
            fullWidth
            label="From City"
            size="medium"
            className="grey-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon sx={{ color: "#4caf50" }} />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />

        <TextField
            fullWidth
            label="To City"
            size="medium"
            className="grey-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FmdBadIcon sx={{ color: "#f44336" }} />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />

            <Typography fontWeight={600} sx={{ mb: 2 }}>
              Load Specifications
            </Typography>

          <TextField
              fullWidth
              label="Material Type"
              size="medium"
              className="grey-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CategoryIcon sx={{ color: "#6750a4" }} />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 3 }}
            />
            <Typography fontWeight={600} sx={{ mb: 1 }}>
              Vehicle Type
            </Typography>

            <Box display="flex" gap={3} mb={3}>
              <Chip
                label="Open Body"
               className="chip"
              />
              <Chip
                label="Closed Body"
                className="chip"
              />
            </Box>

            <Typography fontWeight={600} sx={{ mb: 1 }}>
              Weight & Price
            </Typography>

            <Typography variant="body2" sx={{ mb: 1 }}>
              Weight (Tons)
            </Typography>

            <Slider
                value={weight}
                onChange={(e, v) => setWeight(v)}
                className="weight-slider"
              />

            <Typography variant="body2" sx={{ mb: 1 }}>
              Price Range
            </Typography>

            <Slider
                value={price}
                onChange={(e, v) => setPrice(v)}
                className="price-slider"
              />

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 3 }}
            >
              <Typography fontWeight={600}>
                Enable Nearby Filter
              </Typography>
              <Switch />
            </Box>

            <Box display="flex" gap={2}>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => setShowFilter(false)}
              >
                Clear
              </Button>

              <Button
                fullWidth
                className="filter-btn"
                onClick={() => setShowFilter(false)}
              >
                Apply Filters
              </Button>
            </Box>

          </CardContent>
        </Card>
      )}
    </Box>
  );
}
export default FindLoads;