import { PaginationContain } from "./styled";
import KeyboardDoubleArrowLeftTwoToneIcon from "@mui/icons-material/KeyboardDoubleArrowLeftTwoTone";
import KeyboardDoubleArrowRightTwoToneIcon from "@mui/icons-material/KeyboardDoubleArrowRightTwoTone";

const Pagination = ({ getArrayPosts }) => {
  let arrAll = [];

  for (let index = 1; index <= 10; index++) {
    arrAll.push(
      <span key={index} onClick={() => getArrayPosts(10, +index)}>
        {index}
      </span>
    );
  }

  return (
    <PaginationContain>
      <nav>
        <KeyboardDoubleArrowLeftTwoToneIcon color="primary">
          <a href="#">
            <span>Inicio</span>
          </a>
        </KeyboardDoubleArrowLeftTwoToneIcon>
        {arrAll.map((item) => {
          return item;
        })}
        <KeyboardDoubleArrowRightTwoToneIcon color="primary">
          <a href="#">
            <span>Fim</span>
          </a>
        </KeyboardDoubleArrowRightTwoToneIcon>
      </nav>
    </PaginationContain>
  );
};

export default Pagination;
