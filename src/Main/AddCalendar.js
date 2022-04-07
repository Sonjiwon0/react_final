// import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from '../Common/Header';
import Nav from '../Common/Nav';
import Footer from '../Common/Footer';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import Swall from 'sweetalert2';
import Swal from 'sweetalert2';





const AddCalendar = () => {
    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            <CssBaseline />
            <Container className="content-container" style={{ "fontFamily": "Pretendard-Medium" }}>
                <Box sx={{ bgcolor: 'rgba(238, 238, 238, 1)', borderRadius: '40px 40px 0 0', borderStyle: 'solid', borderColor: 'rgba(153, 153, 153, 1)', height: '100vh' }}>
                    <Box sx={{ flexGrow: 1, mt: 6, pl: 5, pr: 5 }}>
                        <div class="mypage-body">
                            <div class="body-wrapper box">
                                <div class="body-info-container">
                                    <h3 style={{ "fontWeight": "bold", "marginBottom": "2rem", "marginTop": "2rem" }}>일정 추가하기</h3>
                                    <form>
                                        <div style={{ "width": "80%", "margin": "50px auto" }}>
                                            <div>
                                                <span style={{ "display": "flex" }}>일정 내용</span>
                                                <input class="form-control mb-3" type="text" id="title" />
                                                <span style={{ "display": "flex" }}>시작 날짜</span>
                                                <input class="form-control mb-3" type="date" id="start" />
                                                <span style={{ "display": "flex" }}>종료 날짜</span>
                                                <input class="form-control mb-3" type="date" id="end" />

                                                <div style={{ "display": "flex" }}>
                                                    <input type="button" value="추가" class="btn text-white flex-shrink-0 me-2 mb-5 mt-3" style={{ "width": "50%", "backgroundColor": "rgba(49, 141, 251, 1)" }} onClick={(e) => {
                                                        e.preventDefault();

                                                        if (document.getElementById("title").value == '') {
                                                            Swal.fire({
                                                                icon: 'error',
                                                                text: '일정을 입력해주세요.'
                                                            })
                                                        } else if (document.getElementById("start").value == '' || document.getElementById("end").value == '') {
                                                            Swal.fire({
                                                                icon: 'error',
                                                                text: '날짜를 선택해주세요.'
                                                            })
                                                        } else {
                                                            const formData = new FormData();
                                                            formData.append("email", sessionStorage.getItem("email"));
                                                            formData.append("title", document.getElementById("title").value);
                                                            formData.append("start", document.getElementById("start").value);
                                                            formData.append("end", document.getElementById("end").value);

                                                            axios({
                                                                url: "http://localhost:8080/addCalendar",
                                                                method: "post",
                                                                data: formData
                                                            }).then((res) => {
                                                                console.log(res.data);

                                                                Swall.fire(
                                                                    '',
                                                                    '일정 추가되었습니다.',
                                                                    'success'
                                                                )
                                                                setTimeout(function () {
                                                                    window.location = '/calendar';
                                                                  }, 2000)


                                                            }).catch((error) => {
                                                                console.log(error);
                                                            })
                                                        }

                                                    }}></input>
                                                    <input type="button" value="취소" class="btn text-black bg-light flex-shrink-0 me-2 mb-5 mt-3" style={{ "width": "50%", "border": "0.5px solid" }} onClick={(e) => {
                                                        window.location = "/calendar"
                                                    }}></input>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Container>
            <Footer></Footer>
        </div>
    );
}


export default AddCalendar;