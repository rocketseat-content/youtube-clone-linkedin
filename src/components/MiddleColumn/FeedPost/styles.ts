import styled, { css } from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';
import {
  RiMessage2Line,
  RiShareForwardLine,
  RiSendPlaneLine,
} from 'react-icons/ri';

export const Container = styled.div`
  margin-top: 8px;

  @media (min-width: 1180px) {
    margin-top: 16px;
  }
`;

export const Row = styled.div`
  display: flex;
  margin: 0 16px;

  &.heading {
    padding: 12px 0 8px;

    h3 {
      font-size: 14px;
      color: var(--color-black);
    }
    h4,
    time {
      font-size: 12px;
      font-weight: normal;
      color: var(--color-gray);
    }
  }
  &.likes {
    padding: 8px 0;
    font-size: 12px;
    color: var(--color-gray);

    .circle {
      width: 16px;
      height: 16px;
      border-radius: 50%;

      &.blue {
        background: #1385bd;
      }
      &.green {
        background: #6dae4f;
      }
      &.red {
        background: #df704c;
      }

      & + .circle {
        margin-left: 4px;
      }
    }
    .number {
      margin-left: 8px;
    }
  }
  &.actions {
    justify-content: space-between;

    @media (min-width: 1180px) {
      justify-content: flex-start;
    }

    button {
      background: none;
      border: none;
      outline: none;
      color: var(--color-gray);
      font-size: 14px;
      font-weight: 600;

      display: flex;
      align-items: center;
      padding: 14px 8px;

      cursor: pointer;
      &:hover,
      &:focus {
        background: rgba(0, 0, 0, 0.05);
      }

      span {
        display: none;

        @media (min-width: 1180px) {
          display: unset;
        }
      }
    }
  }
`;

export const PostImage = styled.img`
  width: 100%;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid var(--color-separator);
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const Column = styled.div``;

const iconCSS = css`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const LikeIcon = styled(AiOutlineLike)`
  ${iconCSS}
`;

export const CommentIcon = styled(RiMessage2Line)`
  ${iconCSS}
`;

export const ShareIcon = styled(RiShareForwardLine)`
  ${iconCSS}
`;

export const SendIcon = styled(RiSendPlaneLine)`
  ${iconCSS}
`;
