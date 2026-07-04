import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyHeader } from "./header";
import { MyPage1 } from "./page1";
import { MyPage4 } from "./page4";
import { MyPage3 } from "./page3";
import { MyPage2 } from "./page2";
import { NullPage } from "./notfound";

export function RouteApp() {
  return (
    <>
      <BrowserRouter>
        <MyHeader />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MyPage1 />
                <MyPage2 />
                <MyPage4 />
                <MyPage3 />
              </>
            }
          />
          <Route path="page1" element=<MyPage1 /> />
          <Route path="page2" element=<MyPage2 /> />
          <Route path="page3" element=<MyPage3 /> />
          <Route path="page4" element=<MyPage4 /> />
          <Route path="*" element=<NullPage /> />
        </Routes>
      </BrowserRouter>
    </>
  );
}
