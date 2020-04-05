import { Card, CardContent, Typography } from "@material-ui/core";

import { Chord } from "../assets/objects";
import React from "react";

interface TProps {
    chord: Chord;
}

export const PhraseMember = ({ chord }: TProps) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h4">{chord.name}</Typography>
                <Typography variant="h2">{chord.type}</Typography>
            </CardContent>
        </Card>
    );
};

export default PhraseMember;
