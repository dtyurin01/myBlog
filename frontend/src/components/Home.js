import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Tags from './Tags';
import Comments from './Comments'
import Card from './Card'

export function Home(){
    return(
        <div className="container">
            <Tabs style={{ marginTop: 15}} value={0} aria-label="basic tabs example">
                <Tab style={{  fontSize: 14, textTransform:'none' }} label="Нові" />
                <Tab style={{  fontSize: 14, textTransform:'none' }} label="Популярні" />
            </Tabs>
        <div className='mt-3'>
            <Grid container spacing={4}>
        <Grid lg={8} xs={12} item>
            {/* Here comes the Post */}
            <Card/>
        </Grid>
        <Grid lg={4} xs={12} item>
          <Tags/>
          <div className='mt-3'>
          <Comments/>
          </div>
        </Grid>
      </Grid>
      </div>
        </div>
        
    )
}