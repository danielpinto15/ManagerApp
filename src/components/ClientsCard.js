import React from 'react'
import { Card, CardHeader, CardActions, CardContent, IconButton, Typography, makeStyles, Avatar } from '@material-ui/core'
import { DeleteOutline } from '@material-ui/icons'
import { yellow, green, pink, blue } from '@material-ui/core/colors'
import { Box } from '@material-ui/core'
import EditIcon from '@mui/icons-material/Edit';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

const useStyles = makeStyles({
    avatar: {
        backgroundColor: (client) => {
            if(client.category == 'work') {
                return yellow[700]
            }
            if(client.category == 'money') {
                return green[500]
            }
            if(client.category == 'todos') {
                return pink[500]
            }
            return blue[500]
        }
    }
})

export default function ClientCard({ client, handleDelete }) {
    const classes =  useStyles(client);

    let nameAndDate = [client.name, <br />, client.date]

  return (
    <Box>
        <Card elevation={3}>
            <CardHeader 
                avatar={
                    <Avatar className={classes.avatar}>
                         {client.manager[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton onClick={() => handleDelete(client.id)}>
                        {<DownloadDoneIcon />}
                        {<EditIcon />}
                    </IconButton>
                }
                title={nameAndDate}
                
            />
            <CardContent>
                <Typography variante='body2' color='textSecondary'>
                    UA: {client.ua}
                    <br />
                    GN: {client.manager}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <DeleteOutline />
                </IconButton>
                <IconButton aria-label="share">
                <EditIcon />
                </IconButton>
            </CardActions>
        </Card>
    </Box>
  )
}
