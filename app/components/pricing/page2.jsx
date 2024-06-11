"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import Check from "@mui/icons-material/Check";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function Screen4d() {
  return (
    <div
      id="pricinglgmg"
      className="min-h-screen bg-black flex justify-center items-center"
    >
      <Box
        sx={{
          height: "100%",
          display: "grid",
          bgcolor: "black",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 2,
        }}
      >
        <Card
          size="lg"
          variant="solid"
          color="neutral"
          invertedColors
          sx={{ bgcolor: "neutral.100" }}
        >
          <Chip size="sm" variant="outlined" color="neutral">
            BASIC
          </Chip>
          <Typography level="h2">Starter</Typography>
          <Divider inset="none" />
          <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              100 GB Storage
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Basic Support
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              10 Users
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Limited API Access
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions>
            <Typography level="title-lg" sx={{ mr: "auto" }}>
              9.99$
              <Typography fontSize="sm" textColor="text.tertiary">
                / month
              </Typography>
            </Typography>
            <Button
              variant="soft"
              color="neutral"
              endDecorator={<KeyboardArrowRight />}
            >
              Start now
            </Button>
          </CardActions>
        </Card>

        <Card
          size="lg"
          variant="solid"
          color="neutral"
          invertedColors
          sx={{ bgcolor: "neutral.200" }}
        >
          <Chip size="sm" variant="outlined">
            MOST POPULAR
          </Chip>
          <Typography level="h2">Business</Typography>
          <Divider inset="none" />
          <List
            size="sm"
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              mx: "calc(-1 * var(--ListItem-paddingX))",
            }}
          >
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              1 TB Storage
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Priority Support
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              50 Users
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Full API Access
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Data Encryption
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions>
            <Typography level="title-lg" sx={{ mr: "auto" }}>
              29.99$
              <Typography fontSize="sm" textColor="text.tertiary">
                / month
              </Typography>
            </Typography>
            <Button endDecorator={<KeyboardArrowRight />}>Start now</Button>
          </CardActions>
        </Card>

        <Card
          size="lg"
          variant="solid"
          color="neutral"
          invertedColors
          sx={{ bgcolor: "neutral.300" }}
        >
          <Chip size="sm" variant="outlined" color="neutral">
            PREMIUM
          </Chip>
          <Typography level="h2">Enterprise</Typography>
          <Divider inset="none" />
          <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Unlimited Storage
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              24/7 Support
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Unlimited Users
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Custom API Integration
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Advanced Security
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Check />
              </ListItemDecorator>
              Dedicated Account Manager
            </ListItem>
          </List>
          <Divider inset="none" />
          <CardActions>
            <Typography level="title-lg" sx={{ mr: "auto" }}>
              99.99$
              <Typography fontSize="sm" textColor="text.tertiary">
                / month
              </Typography>
            </Typography>
            <Button
              variant="soft"
              color="neutral"
              endDecorator={<KeyboardArrowRight />}
            >
              Start now
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
