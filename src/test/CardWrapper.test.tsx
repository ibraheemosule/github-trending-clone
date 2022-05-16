import { screen, render } from "@testing-library/react";
import axios from "axios";
import * as _ from "./fakeData";
import { fetchData } from "../store/actions";
import { useDispatch } from "react-redux";

// dispatch(fetchData("repos", repositories));
// dispatch(fetchData("devs", developers));
// jest.mock("axios", () => ({
//     esModule: true,
//     default: {
//         get: () => ({
//             data:
//         })
//     }
// }))

test("wrapper rendering elements", () => {});
