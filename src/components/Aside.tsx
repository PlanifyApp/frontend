import React, { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import logo from '../assets/imgs/logo.png';
import {
    Box,
    Button,
    ButtonBase,
    FormGroup,
    Grow,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField,
    Typography
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {
    CustomButton,
    CustomColorButton,
    CustomColorPaletteBox,
    CustomDatePicker,
    CustomGroupBox,
    CustomGroupPaper,
    CustomList,
    CustomListItem,
    CustomListItemText,
    useIconStyle
} from '../assets/styles/aside.styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CheckBox from '@mui/icons-material/CheckBox';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { MuiColorInput } from 'mui-color-input';
import { FormControl } from '@mui/base';

export const Aside = () => {
    const [color, setColor] = useState('#fff');
    const [open, setOpen] = useState(false);
    const modalRef = useRef<HTMLElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const changeColor = (e: any) => {
        console.log(e);
    };

    useEffect(() => {
        const onFocusOut = (e: MouseEvent) => {
            if (
                modalRef.current &&
                buttonRef.current &&
                !modalRef.current.contains(e.target as Node) &&
                !buttonRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener('click', onFocusOut);
        return () => {
            document.removeEventListener('click', onFocusOut);
        };
    }, []);

    return (
        <>
            <Box height="95%">
                <Grid container columns={16} spacing={1}>
                    <Grid desktop={2}>
                        <img src={logo} alt="logo" width="100%" />
                    </Grid>
                    <Grid desktop="auto">
                        <Typography variant="body1" fontWeight="bold">
                            로그인 / 회원가입
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container columns={16} spacing={2} paddingTop="10px">
                    <Grid desktop={8}>
                        <CustomButton>
                            <Typography variant="body1" fontWeight="bold">
                                회원가입
                            </Typography>
                        </CustomButton>
                    </Grid>
                    <Grid desktop={8}>
                        <CustomButton>
                            <Typography variant="body1" fontWeight="bold">
                                로그인
                            </Typography>
                        </CustomButton>
                    </Grid>
                </Grid>
                <Box py="30px">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <CustomDatePicker views={['month', 'day']} />
                    </LocalizationProvider>
                </Box>
                <Box py="25px" borderTop={1} borderColor="secondary.main">
                    <Typography variant="h5">todo List</Typography>
                    <CustomList>
                        <CustomListItem>
                            <ListItemButton disableRipple>
                                <ListItemIcon>
                                    <CheckBox />
                                </ListItemIcon>
                                <CustomListItemText primary="testasdfasdfasdfasdfasdfasdfdfasdfasdfaasdgsdfgfdagasdgasgsdsd" />
                            </ListItemButton>
                        </CustomListItem>
                        <CustomListItem>
                            <ListItemButton disableRipple>
                                <ListItemIcon>
                                    <CheckBox />
                                </ListItemIcon>
                                <CustomListItemText primary="test" />
                            </ListItemButton>
                        </CustomListItem>
                    </CustomList>
                </Box>
            </Box>
            <Grid container alignItems="flex-end" height="5%">
                <ButtonBase disableRipple>
                    <PlaylistAddCheckIcon {...useIconStyle} />
                </ButtonBase>
                <ButtonBase disableRipple onClick={handleClick} ref={buttonRef}>
                    <PlaylistAddIcon {...useIconStyle} />
                </ButtonBase>
            </Grid>
            {/* <Grow in={open} ref={modalRef}>
                <CustomGroupBox>
                    <CustomGroupPaper>
                        <form>
                            <Typography variant="h5" marginBottom="10px">
                                Add Group
                            </Typography>
                            <FormControl>
                                <TextField
                                    fullWidth
                                    placeholder="그룹명을 입력해주세요."
                                />
                            </FormControl>
                            <FormControl style={{ margin: '10px 0' }}>
                                <MuiColorInput
                                    format="hex"
                                    fullWidth
                                    value={color}
                                    onChange={changeColor}
                                />
                            </FormControl>
                            <FormControl>
                                <CustomButton>
                                    <Typography variant="body1">
                                        추가
                                    </Typography>
                                </CustomButton>
                            </FormControl>
                        </form>
                    </CustomGroupPaper>
                </CustomGroupBox>
            </Grow> */}
            <Grow in={open} ref={modalRef}>
                <CustomGroupBox>
                    <CustomGroupPaper>
                        <List>
                            <ListItem>
                                <ListItemText primary="운동" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="업무" />
                            </ListItem>
                        </List>
                    </CustomGroupPaper>
                </CustomGroupBox>
            </Grow>
        </>
    );
};
