import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {createClient} from "pexels";
import {useSetRecoilState} from "recoil";
import ImageBgHome from "../../../services/ImageBgHome";

export default function ComboBox() {
    const setPhotosPexel = useSetRecoilState(ImageBgHome)

    return (
        <Autocomplete disablePortal
                      id="combo-box-demo"
                      options={top100Photos}
                      onChange={(event) => {
                const client = createClient('0ZHed9hkzeVlC5rbPyRJKmi7nZuoVXTyRBzJ0uthxgYRBiSb1ydk3eTx');
                const query = event.currentTarget.innerHTML;

                client.photos.search({ query, per_page: 100 }).then((photos: any) => {
                    const photosFilter = photos.photos.filter((item: any) => item.height < item.width )
                    setPhotosPexel( photosFilter.splice(-20) )
                });

            }}
                      sx={{ width: '100%', mb:1 }}
                      renderInput={(params) =>
                          <TextField {...params} label="Theme" size="small"/>}/>
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Photos = [
    { label: 'Underwater', year: 1994 },
    { label: 'Night', year: 1972 },
    { label: 'Nature', year: 1974 },
    { label: 'Orange Kiss', year: 2008 },
    { label: 'Seascapes', year: 1957 },
    { label: "Lifestyle", year: 1993 },
    { label: 'The Sea', year: 1994 }
];