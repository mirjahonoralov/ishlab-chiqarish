import styled from "styled-components";
import { ReactComponent as user } from "../../assets/icons/login/user.svg";
import { ReactComponent as lock } from "../../assets/icons/login/lock.svg";
import { ReactComponent as search } from "../../assets/icons/login/search.svg";
import { ReactComponent as crossLogo } from "../../assets/icons/login/cross-logo.svg";
import { ReactComponent as algorithmLogo } from "../../assets/icons/login/algorithm-logo.svg";

export const Icon = styled.div``;

Icon.User = user;
Icon.Search = search;
Icon.Lock = lock;
Icon.AlgorithmLogo = algorithmLogo;
Icon.CrossLogo = styled(crossLogo)`
  width: 140px;
`;
