"use client"

import Image from 'next/image'
import './page.css'
import { useEffect, useRef, useState } from 'react';

export default function Home() {

  const [isRow, setRow] = useState(false);
  const [isVer, setVer] = useState(false);
  const [scrollY, setScrollY] = useState(0)
  const [scrollX, setScrollX] = useState(0);
  const [isRow2, setRow2] = useState(false);
  const [scrollX2, setScrollX2] = useState(0);
  const [width, setWidth] = useState([0, 0, 0, 0])
  const ScrollRef = useRef(null);
  const horizontalSectionRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {

      if(!(isRow) && ScrollRef.current.scrollTop < document.querySelector('.fp').clientHeight){
        if((ScrollRef.current.scrollTop + 10) >= document.querySelector('.p1.imgCxt.second').offsetTop) {
          document.querySelector('.nav.title').style = 'color: #f43675';
          document.querySelectorAll('.iconcolor')[0].style = 'color: #f43675';
          document.querySelectorAll('.iconcolor')[1].style = 'color: #f43675';
        } 
        if((ScrollRef.current.scrollTop + 10) >= document.querySelector('.p1.imgCxt.trd').offsetTop) {
          document.querySelector('.nav.title').style = 'color: #e2a74e';
          document.querySelectorAll('.iconcolor')[0].style = 'color: #e2a74e';
          document.querySelectorAll('.iconcolor')[1].style = 'color: #e2a74e';
        } 
        if((ScrollRef.current.scrollTop + 10) <= document.querySelector('.p1.imgCxt.second').offsetTop || (ScrollRef.current.scrollTop + 10) >= document.querySelector('.p1.imgCxt.fth').offsetTop) {
          document.querySelector('.nav.title').style = 'color: #5CC8D3';
          document.querySelectorAll('.iconcolor')[0].style = 'color: #5CC8D3';
          document.querySelectorAll('.iconcolor')[1].style = 'color: #5CC8D3';
        }
      }

      if(ScrollRef.current.scrollTop > document.querySelector('.fp').clientHeight && (!isRow) && scrollX < 100) {
        ScrollRef.current.scrollTop = document.querySelector('.fp').clientHeight
        document.querySelector('.cxt').style = 'overflow: hidden;'
        setRow(true)
        document.querySelector('.nav.title').style = 'color: #ffffff';
        document.querySelectorAll('.iconcolor')[0].style = 'color: #ffffff';
        document.querySelectorAll('.iconcolor')[1].style = 'color: #ffffff';
      }
      if(ScrollRef.current.scrollTop < document.querySelector('.fp').clientHeight && (!isRow) && scrollX > 500) {
        ScrollRef.current.scrollTop = document.querySelector('.fp').clientHeight
        document.querySelector('.cxt').style = 'overflow: hidden;'
        document.querySelector('.nav.title').style = 'color: #ffffff';
        document.querySelectorAll('.iconcolor')[0].style = 'color: #ffffff';
        document.querySelectorAll('.iconcolor')[1].style = 'color: #ffffff';
        setRow(true)
      }
      if(isRow) {
        setScrollX((pre) => {
          let newp = pre + (e.deltaY * 0.1); 
          if(newp < 0) { 
            document.querySelector('.cxt').style = 'overflow: auto; ';
            setWidth([0, 0, 0])
            setRow(false)
          }
          if(newp > 800) {
            setRow(false)
            setWidth([0, 0, 0, 100])
            document.querySelector('.cxt').style = 'overflow: auto; scroll-snap-type: none;';
          } 
          return newp;
        })
        if(scrollX < 100) {
          ScrollRef.current.scrollTop = document.querySelector('.fp').clientHeight
          setWidth([100, 0, 0, 0])
          document.querySelector('.p2.modal').classList.remove('show');
        } else if (100 <= scrollX && scrollX < 200) {
          setWidth([100, 100, 0, 0])
          document.querySelector('.p2.modal')?.classList.add('show')
        } else if (200 < scrollX && scrollX < 300) {
          setWidth([100, 100, 0, 0])
          document.querySelector('.p2.imgCxt.fth').currentTime = 4
        } else if (300 <= scrollX && scrollX < 400) {
          setWidth([100, 100, 100, 0])
          document.querySelector('.p2.imgCxt.fith').currentTime = 6
        } else if (400 <= scrollX && scrollX < 500) {
          setWidth([100, 100, 100, 100])
          document.querySelector('.p2.modal').style = `width: 70vw; height: 90px; left: 15vw;`
          document.querySelector('.p2.modalCxt')?.classList.remove('hide');
        } else if (500 <= scrollX && scrollX < 600) {
          document.querySelector('.p2.modalCxt')?.classList.add('hide')
          setWidth([100, 100, 100, 100])
          var per = scrollX - 500
          var h = ((per / 100) * 87) + 13
          document.querySelector('.p2.modal').style = `width: 100vw; height: ${h}%; left: 0vw;`
          document.querySelector('.p2.m2.t1')?.classList.remove('show')
          document.querySelector('.p2.m2.t2')?.classList.remove('show')
        } else if (600 <= scrollX && scrollX < 700) {
          document.querySelector('.navCxt').style = 'opacity: 1;'
          document.querySelector('.p2.modal').style = `width: 100vw; height: 100%; left: 0; opacity: 1;`
          document.querySelector('.p2.m2.t1')?.classList.add('show')
          document.querySelector('.p2.m2.t2')?.classList.add('show')
          document.querySelector('.bridge')?.classList.remove('show')
        } else if (700 <= scrollX && scrollX < 800) { 
          document.querySelector('.cxt').style = 'overflow: hidden; scroll-snap-type: y mandatory;'
          ScrollRef.current.scrollTop = document.querySelector('.fp').clientHeight
          document.querySelector('.navCxt').style = 'opacity: 0;'
          document.querySelector('.bridge')?.classList.add('show')
          document.querySelector('.p2.modal').style = `width: 100vw; height: 100%; left: 0; opacity: ${1 - ((scrollX - 700) * 0.01)};`
        }
      }

      if(ScrollRef.current.scrollTop > document.querySelector('.forp').offsetTop && (!isVer) && scrollY < 100) {
        document.querySelector('.cxt').style = 'overflow: hidden; scroll-snap-type: none;'
        ScrollRef.current.scrollTop = document.querySelector('.forp').offsetTop
        setVer(true)
      }
      if(ScrollRef.current.scrollTop < document.querySelector('.forp').offsetTop && (!isVer) && scrollY > 400) {
        document.querySelector('.cxt').style = 'overflow: hidden; scroll-snap-type: none;'
        ScrollRef.current.scrollTop = document.querySelector('.forp').offsetTop
        setVer(true)
      }
      if(isVer) {
        setScrollY((pre) => {
          let newp = pre + (e.deltaY * 0.05); 
          if(newp < 0) { 
            document.querySelector('.cxt').style = 'overflow: auto;  scroll-snap-type: none;';
            setVer(false)
          }
          if(newp > 500) {
            document.querySelector('.cxt').style = 'overflow: auto;  scroll-snap-type: none;';
            setVer(false)
          } 
          return newp;
        })
        if(scrollY < 100) {
          document.querySelector('.p4.Cxt.n1').childNodes[0].style.transform = 'translateY(0)'
          document.querySelector('.p4.Cxt.n1').childNodes[1].style.transform = 'translateY(0)'
          document.querySelector('.p4.Cxt.n1').childNodes[2].style.transform = 'translateY(0)'
          document.querySelector('.p4.Cxt.n2').childNodes[0].style.transform = 'translateY(100vh)'
          document.querySelector('.p4.Cxt.n2').childNodes[1].style.transform = 'translateY(100vh)'
          document.querySelector('.p4.Cxt.n2').childNodes[2].style.transform = 'translateY(100vh)'
        } else if(100 <= scrollY && scrollY < 200) {
          document.querySelector('.p4.Cxt.n1').childNodes[0].style.transform = 'translateY(-100vh)'
          document.querySelector('.p4.Cxt.n1').childNodes[1].style.transform = 'translateY(-100vh)'
          document.querySelector('.p4.Cxt.n1').childNodes[2].style.transform = 'translateY(-100vh)'
          document.querySelector('.p4.Cxt.n2').childNodes[0].style.transform = 'translateY(0vh)'
          document.querySelector('.p4.Cxt.n2').childNodes[1].style.transform = 'translateY(0vh)'
          document.querySelector('.p4.Cxt.n2').childNodes[2].style.transform = 'translateY(0vh)'
          document.querySelector('.p4.Cxt.n3').childNodes[0].style.transform = 'translateY(100vh)'
          document.querySelector('.p4.Cxt.n3').childNodes[1].style.transform = 'translateY(100vh)'
          document.querySelector('.p4.Cxt.n3').childNodes[2].style.transform = 'translateY(100vh)'
        } else if(200 <= scrollY && scrollY < 300) {
          document.querySelector('.p4.Cxt.n2').childNodes[0].style.transform = 'translateY(-100vh)'
          document.querySelector('.p4.Cxt.n2').childNodes[1].style.transform = 'translateY(-100vh)'
          document.querySelector('.p4.Cxt.n2').childNodes[2].style.transform = 'translateY(-100vh)'
          document.querySelector('.p4.Cxt.n3').childNodes[0].style.transform = 'translateY(0vh)'
          document.querySelector('.p4.Cxt.n3').childNodes[1].style.transform = 'translateY(0vh)'
          document.querySelector('.p4.Cxt.n3').childNodes[2].style.transform = 'translateY(0vh)'
          document.querySelector('.p4.Cxt.n4').childNodes[0].style.transform = 'translateY(100vh)'
          document.querySelector('.p4.Cxt.n4').childNodes[1].style.transform = 'translateY(100vh)'
          document.querySelector('.p4.Cxt.n4').childNodes[2].style.transform = 'translateY(100vh)'
        } else if(300 <= scrollY && scrollY < 400) {
          document.querySelector('.p4.Cxt.n3').childNodes[0].style.transform = 'translateY(-100vh)'
          document.querySelector('.p4.Cxt.n3').childNodes[1].style.transform = 'translateY(-100vh)'
          document.querySelector('.p4.Cxt.n3').childNodes[2].style.transform = 'translateY(-100vh)'
          document.querySelector('.p4.Cxt.n4').childNodes[0].style = `clip-path: inset(9vw 68.5vw 9vw 5.5vw); transform: translateY(0vh);`
          document.querySelector('.p4.Cxt.n4').childNodes[1].style = `clip-path: inset(9vw 37vw 9vw 37vw); transform: translateY(0vh);`
          document.querySelector('.p4.Cxt.n4').childNodes[2].style = `clip-path: inset(9vw 5.5vw 9vw 68.5vw); transform: translateY(0vh);`
        } else if(400 <= scrollY) {
          var pro = (scrollY - 400) / 10
          document.querySelector('.p4.Cxt.n4').childNodes[0].style = `clip-path: inset(${9 - pro}vw ${68.5 - pro}vw ${9 - pro}vw ${5.5 - pro}vw); transform: translateY(0vh);`
          document.querySelector('.p4.Cxt.n4').childNodes[1].style = `clip-path: inset(${9 - pro}vw ${37 - pro}vw ${9 - pro}vw ${37 - pro}vw); transform: translateY(0vh);`
          document.querySelector('.p4.Cxt.n4').childNodes[2].style = `clip-path: inset(${9 - pro}vw ${5.5 - pro}vw ${9 - pro}vw ${68.5 - pro}vw); transform: translateY(0vh);`
        }
      }
      if(ScrollRef.current.scrollTop >= document.querySelector('.six').offsetTop && (!isRow2) && scrollX2 < 100) {
        document.querySelector('.six').classList.add('show')
        document.querySelector('.cxt').style = 'overflow: hidden; scroll-snap-type: none;'
        ScrollRef.current.scrollTop = document.querySelector('.six').offsetTop
        setRow2(true)
      } 
      if(isRow2) {
        console.log(scrollX2)
        setScrollX2((pre) => {
          let newp = pre + (e.deltaY * 0.05); 
          if(newp < 0) { 
            setRow2(false)
            setScrollX2(0)
            document.querySelector('.six').classList.remove('show')
            ScrollRef.current.scrollTop = (document.querySelector('.six').offsetTop - 10)
            document.querySelector('.cxt').style = 'overflow: auto;  scroll-snap-type: none;';
          }
          if(newp > 300) {
            newp = 300;
          } 
          return newp;
        })
        if(scrollX2 < 100) {
          document.querySelector('.p6.img.n1').style.width = `0vw`
          document.querySelector('.p6.dec.n2').classList.remove('sel')
          document.querySelector('.p6.dec.n1').classList.add('sel')
          document.querySelector('.p6.t2').innerHTML = '아직 못다한 이야기가 남아있어요.'
        } else if(100 <= scrollX2 && scrollX2 < 200) {
          var p = (scrollX2 - 100)
          document.querySelector('.p6.img.n1').style.width = `100vw`
          document.querySelector('.p6.img.n2').style.width = `0vw`
          document.querySelector('.p6.dec.n1').classList.remove('sel')
          document.querySelector('.p6.dec.n2').classList.add('sel')
          document.querySelector('.p6.dec.n3').classList.remove('sel')
          document.querySelector('.p6.t2').innerHTML = '눈이 오던 그 날을 기억하세요?'
        } else if(200 <= scrollX2 && scrollX2 < 300) {
          var p = (scrollX2 - 200)
          document.querySelector('.p6.img.n2').style.width = `100vw`
          document.querySelector('.p6.dec.n2').classList.remove('sel')
          document.querySelector('.p6.dec.n3').classList.add('sel')
          document.querySelector('.p6.t2').innerHTML = '신비의 섬, 제주로..'
        } else if(300 <= scrollX2) {
          document.querySelector('.p6.img.n2').style.width = `100vw`
        }
      }
      // else {
      //   document.querySelector('.p6.top').classList.remove('show')
      //   document.querySelector('.p6.bott').classList.remove('show')
      // }
    }


    window.addEventListener('wheel', handleWheel)

    return () => {
      window.removeEventListener('wheel', handleWheel)
    };
  }, [scrollX, isRow, isVer, scrollY, isRow2, scrollX2]);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
      <div className='cxt' ref={ScrollRef}>
        <div className='fp' >
          <div className='navCxt'>
            <div className='nav more'><ion-icon class='iconcolor' name="menu-outline"></ion-icon></div>
            <div className='nav title'>한국교통기행</div>
            <div className='nav search'><ion-icon class='iconcolor' name="search-outline"></ion-icon></div>
          </div>
          <div className='p1 imgCxt first'>
            <div className='p1 imgC'>
              <div className='p1 mimg'>
                <img className='p1 img1a' key={'asdf'} src='/1-1_mask2.jpg'/>
                <img className='p1 img1' src='/1-1_mask_.jpg'/>
              </div>
              <div className='p1 decCxt'>
                <div className='p1 dec1 first'></div>
                <div className='p1 dec1 sec'></div>
                <div className='p1 dec1 trd'></div>
                <div className='p1 dec1 qr'></div>
              </div>
            </div>
            <div className='p1 place'>자갈치역</div>
          </div>
          <div className='p1 imgCxt second'>
            <div className='p1 mimg2'>
              <img className='p1 img2a' src='/1-2_mask2.jpg'/>
              <img className='p1 img2' src='/1-2_mask.jpg'/>
            </div>
            <div className='p1 place s'>망상해수욕장역</div>
          </div>
          <div className='p1 imgCxt trd'>
            <div className='p1 mimg2'>
              <img key={'asdfe'} className='p1 img1' src='/1-3_mask.jpg'/>
              <img key={'asdfee'}className='p1 img3a' src='/1-3_mask2.jpg'/>
              <svg className='p1 img3b' width="100" height="100" viewBox="0 0 4327 794" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className='p1 path1' d="M93 121.467C398.279 153.955 1031.95 264.015 1425.13 356.381C1916.6 471.839 2543.31 861.697 2740.1 770.23C2936.89 678.763 3564.1 164.451 3791.67 121.467C4019.24 78.4826 3904.51 211.624 4079.8 175.947C4227.14 145.958 4262.63 65.4875 4322 31" stroke="white"/>
                  <path className='p1 path1' d="M88 94.5C390.5 127 1018.4 237.1 1408 329.5C1895 445 2516 835 2711 743.5C2906 652 3527.5 137.5 3753 94.5C3978.5 51.5 3864.81 184.69 4038.5 149C4184.5 119 4219.67 38.5001 4278.5 4" stroke="white" />
                  <path className='p1 path1' d="M1 115.59C313.065 147.045 960.818 253.605 1362.74 343.034C1865.14 454.82 2452.24 864.114 2653.41 775.556C2854.58 686.998 3549.25 157.207 3781.88 115.59C4014.51 73.9727 3897.23 202.88 4076.41 168.338C4227.03 139.303 4263.31 61.3908 4324 28" stroke="white" />
              </svg>      
            </div>
            <div className='p1 place t'>안동역</div>
          </div>
          <div className='p1 imgCxt fth'>
            <div className='p1 mimg2'>
              <img className='p1 img4' src='/1-4_mask.jpg'/>
              <img className='p1 img4a' src='/1-4_mask2.jpg'/>
              <img className='p1 img4b' src='/1-4_line.jpg'/>
            </div>
            <div className='p1 place'>강변역</div>
          </div>
        </div>
        <div className='sp'>
          <div className='p2 inner'ref={horizontalSectionRef}>
            <div className='p2 imgCxt first'></div>
            <div className='p2 imgCxt second' style={{width:`${width[0]}vw`}}></div>
            <div className='p2 imgCxt third' style={{width:`${width[1]}vw`}}></div>
            <video className='p2 imgCxt fth' src='/2-4.mp4'  loop autoPlay muted style={{width:`${width[2]}vw`}}></video>
            <video className='p2 imgCxt fith' src='/2-5.mp4' loop autoPlay muted style={{width:`${width[3]}vw`}}></video>
          </div>
          <div className='p2 modal'>
            <div className='p2 mct'>
              <div className='p2 modalCxt'>
                <div className='p2 m t1'>About</div>
                <div className='p2 m t2'>Explore</div>
                <div className='p2 m t3'>FAQ</div>
              </div>
              <div className='p2 m2 t1'>반가워요.</div>
              <div className='p2 m2 t2'><span style={{fontWeight:500}}>아름다운 모험</span>을 위한 준비는 되셨나요?</div>
            </div>
          </div>
        </div>
        <div className='bridge'>
          <img className='p3 img1' src='/3-1.jpg' />
          <div className='p2 m2 t1 w'>반가워요.</div>
          <div className='p2 m2 t2 w'><span style={{fontWeight:500}}>아름다운 모험</span>을 위한 준비는 되셨나요?</div>
        </div>
        <div className='tp'>
          <div className='p3 lineCxt'>
            <div className='p3 line a'></div>
            <div className='p3 line b'></div>
            <div className='p3 line c'></div>
            <div className='p3 line d'></div>
          </div>
          <div className='p3 ddp cxt'>
            <div className='p3 img2'></div>
            <div className='p3 d2'>
              <div className='p3 textC'></div>
              <div className='p3 title'>DDP</div>
              <div className='p3 ddeco'>
                <div className='p3 deco'></div>
              </div>
              <div className='p3 sub'>동대문 디지털 플라자</div>
              <div className='p3 img3' />
            </div>
          </div>
          <div className='p3 tTitleC'>
            <div className='p3 t1'>A travelogue in Korea</div>
            <div className='p3 t2'>여행하는 동안 보고, 듣고, 느낀 것</div>
          </div>
        </div>
        <div className='forp'>
          <div className='p4 Cxt n1'>
            <div className='p4 imgCxt f' style={{transform: 'translateY(0)'}}>
              <img className='p4 img' src='/4-1.jpg'/>
              <div className='p4 num'>01</div>
              <div className='p4 dec'>F/5 1/1000 ISO-100 100mm</div>
            </div>
            <div className='p4 imgCxt f' style={{transform: 'translateY(0)'}}>
              <img className='p4 img cen' src='/4-2.jpg'/>
              <div className='p4 num cen'>02</div>
              <div className='p4 dec'>F/6.3 1/2000 ISO-100 200mm</div>
            </div>
            <div className='p4 imgCxt f last' style={{transform: 'translateY(0)'}}>
              <img className='p4 img' src='/4-3.jpg'/>
              <div className='p4 num'>03</div>
              <div className='p4 dec'>F/6.3 1/2000 ISO-100 200mm</div>
            </div>
          </div>
          <div className='p4 Cxt n2'>
            <div className='p4 imgCxt' style={{transform: 'translateY(100vh)'}}>
              <img className='p4 img' src='/4-4.jpg'/>
              <div className='p4 num'>04</div>
              <div className='p4 dec'>F/6.3 1/320 ISO-100 200mm</div>
            </div>
            <div className='p4 imgCxt' style={{transform: 'translateY(100vh)'}}>
              <img className='p4 img cen' src='/4-5.jpg'/>
              <div className='p4 num cen'>05</div>
              <div className='p4 dec'>F/5 1/400 ISO-100 32mm</div>
            </div>
            <div className='p4 imgCxt last' style={{transform: 'translateY(100vh)'}}>
              <img className='p4 img' src='/4-6.jpg'/>
              <div className='p4 num'>06</div>
              <div className='p4 dec'>F/5.6 1/250 ISO-800 153mm</div>
            </div>
          </div>
          <div className='p4 Cxt n3'>
            <div className='p4 imgCxt' style={{transform: 'translateY(100vh)'}}>
              <img className='p4 img' src='/4-7.jpg'/>
              <div className='p4 num'>07</div>
              <div className='p4 dec'>F/6.3 1/500 ISO-100 200mm</div>
            </div>
            <div className='p4 imgCxt' style={{transform: 'translateY(100vh)'}}>
              <img className='p4 img cen' src='/4-8.jpg'/>
              <div className='p4 num cen'>08</div>
              <div className='p4 dec'>F/4.5 1/2000 ISO-100 55mm</div>
            </div>
            <div className='p4 imgCxt last' style={{transform: 'translateY(100vh)'}}>
              <img className='p4 img' src='/4-9.jpg'/>
              <div className='p4 num'>09</div>
              <div className='p4 dec'>F/6.3 1/2000 ISO-500 200mm</div>
            </div>
          </div>
          <div className='p4 Cxt n4'>
            <div className='p4 imgCxt ll' style={{transform: 'translateY(100vh)'}}>
            </div>
            <div className='p4 imgCxt ll' style={{transform: 'translateY(100vh)'}}>
            </div>
            <div className='p4 imgCxt last ll' style={{transform: 'translateY(100vh)'}}>
            </div>
          </div>
        </div>
        <div className='fifp'>
          <img className='p5 img' src='/5-2.jpg'></img>
          <img className='p5 img' src='/5-3.jpg'></img>
          <img className='p5 img' src='/5-4.jpg'></img>
        </div>
        <div className='six'>
          <div className='p6 tCxt'>
            <div className='p6 t1'>함께 떠나요</div>
            <div className='p6 t2'>아직 못다한 이야기가 남아있어요.</div>
          </div>
          <div className='p6 right'></div>
          <div className='p6 top'></div>
          <div className='p6 bott'>
            <div className='p6 decCxt'>
              <div className='p6 dec n1 sel'></div>
              <div className='p6 dec n2'></div>
              <div className='p6 dec n3'></div>
            </div>
          </div>
          <div className='p6 img n1'></div>
          <div className='p6 img n2'></div>
        </div>
      </div>
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" defer></script>
      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" defer></script>
    </>
  )
}
