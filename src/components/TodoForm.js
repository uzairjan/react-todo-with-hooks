import React, { useState } from 'react';
import { Grid,Paper,TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const TodoForm = (props) => {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;

        props.addTodo(value);
        setValue("");
    }

    const useStyles = makeStyles({
        root:{
            flexGrow: 1
        }
    })

    const classes = useStyles();

    return(
        <form onSubmit={handleSubmit} className={classes.root}>
            <Grid item md={12}>
                <Grid container alignItems="center" justify="center">
                    <Grid item md={6} style={{ padding:5 }}>
                        <Paper style={{ padding:16 }}>
                            <Grid container>
                                <Grid item md={10} style={{ paddingRight:10 }}>
                                    <TextField 
                                        fullWidth
                                        value= {value}
                                        onChange= {e => setValue(e.target.value)}
                                    />
                                </Grid>
                                <Grid item md={2}>
                                    <Button type="submit" variant="outlined">
                                        Add Todo
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
}


export default TodoForm;