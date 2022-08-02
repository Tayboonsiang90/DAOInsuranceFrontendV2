import { Typography, Grid, TextField, Slider, Card, CardContent, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React from "react";
import { useState } from "react";

const BuyNewPolicy = () => {
    let [carMake, setCarMake] = useState("");
    let [carModel, setCarModel] = useState("");
    let [carYear, setCarYear] = useState("");
    let [carNumber, setCarNumber] = useState("");
    let [purchasingGuild, setPurchasingGuild] = useState("");
    let [durationOfPolicy, setDurationOfPolicy] = useState(12);
    let [policyExcess, setPolicyExcess] = useState(800);
    let [premiumQuote, setPremiumQuote] = useState(1200 - 800 / 5);

    let handleChange = (event) => {
        let { name, value } = event.target;
        if (name === "carMake") {
            setCarMake(value);
        } else if (name === "carModel") {
            setCarModel(value);
        } else if (name === "carYear") {
            setCarYear(Number(value));
        } else if (name === "carNumber") {
            setCarNumber(value);
        } else if (name === "policyExcess") {
            setPolicyExcess(value);
            setPremiumQuote(Math.max(1200 - policyExcess / 5, 450));
        } else if (name === "purchasingGuild") {
            setPurchasingGuild(value);
        } else if (name === "durationOfPolicy") {
            setDurationOfPolicy(Number(value));
        }
    };

    return (
        <React.Fragment>
            <Typography variant="h2">Buy New Policy</Typography>
            <Grid container className="mt-3" spacing={2}>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="select1label">Car Make</InputLabel>
                        <Select required labelId="select1label" id="select1" label="Car Make" name="carMake" value={carMake} onChange={handleChange}>
                            <MenuItem value={"Audi"}>Audi</MenuItem>
                            <MenuItem value={"BMW"}>BMW</MenuItem>
                            <MenuItem value={"Chevrolet"}>Chevrolet</MenuItem>
                            <MenuItem value={"Citroen"}>Citroen</MenuItem>
                            <MenuItem value={"Toyota"}>Toyota</MenuItem>
                            <MenuItem value={"Honda"}>Honda</MenuItem>
                            <MenuItem value={"Mercedes"}>Mercedes</MenuItem>
                            <MenuItem value={"Lamboghini"}>Lamboghini</MenuItem>
                            <MenuItem value={"Hyundai"}>Hyundai</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="select2label">Car Model</InputLabel>
                        <Select required labelId="select2label" id="select2" label="Car Model" name="carModel" value={carModel} onChange={handleChange}>
                            <MenuItem value={"A3"}>A3</MenuItem>
                            <MenuItem value={"A4"}>A4</MenuItem>
                            <MenuItem value={"A5"}>A5</MenuItem>
                            <MenuItem value={"A6"}>A6</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required fullWidth id="yearRegistered" label="Year Registered" name="carYear" type="number" value={carYear} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required fullWidth id="carNumber" label="Car Plate Number" name="carNumber" value={carNumber} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="select3label">Purchasing Guild</InputLabel>
                        <Select required labelId="select3label" id="select3" label="Purchasing Guild" name="purchasingGuild" value={purchasingGuild} onChange={handleChange}>
                            <MenuItem value={"Team Zai Zai"}>Team Zai Zai</MenuItem>
                            <MenuItem value={"Team Lowest Premium"}>Team Lowest Premium</MenuItem>
                            <MenuItem value={"Guild of Legends"}>Guild of Legends</MenuItem>
                            <MenuItem value={"Best Guild on Earth"}>Best Guild on Earth</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="select4label">Duration of Policy</InputLabel>
                        <Select required labelId="select4label" id="select4" label="Duration of Policy" name="durationOfPolicy" value={durationOfPolicy} onChange={handleChange}>
                            {[...Array(24).keys()].map((index) => (
                                <MenuItem key={index + 1} value={index + 1}>
                                    {index + 1} months
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <InputLabel id="slider1label" className="mt-4">
                Customize your policy excess (SGDP$)
            </InputLabel>
            <Slider className="mt-5" min={0} max={3000} defaultValue={800} step={10} valueLabelDisplay="on" name="policyExcess" value={policyExcess} onChange={handleChange} />
            <Grid container className="mt-3" spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h4">
                                <i className="fa-solid fa-sack-dollar"></i> Annual Premium Price
                            </Typography>
                            <Typography variant="body1">SGDP$ {((premiumQuote * durationOfPolicy) / 12).toFixed(2)}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h4">
                                <i className="fa-solid fa-sack-dollar"></i> Monthly Premium Price
                            </Typography>
                            <Typography variant="body1">SGDP$ {((premiumQuote * durationOfPolicy) / (12 * 12)).toFixed(2)}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={2} className="mt-1">
                <Grid item xs={12} sm={6}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h4">
                                <i className="fa-solid fa-coins"></i> Insurance Guild Token Awarded
                            </Typography>
                            <Typography variant="body1">IGT {((premiumQuote * durationOfPolicy) / 12).toFixed(2)}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h4">
                                <i className="fa-solid fa-circle"></i> Loyalty Token Awarded
                            </Typography>
                            <Typography variant="body1">LOYAL {((premiumQuote * durationOfPolicy) / 12).toFixed(2)}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Typography className="mt-3" variant="body1">
                **Premiums are due monthly. However, you can pay in advance.
            </Typography>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Buy
            </Button>
        </React.Fragment>
    );
};

export default BuyNewPolicy;
