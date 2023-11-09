import { BoardsEndpointConstants } from "../constants/boards-endpoint-constants"
export default class BoardEndpoints {

    getBoardById(boardId) {
        return BoardsEndpointConstants.GET_BOARD.replace(
            '{boardId}',
            boardId
        )
    }

    updateBoardById(boardId) {
        return BoardsEndpointConstants.PUT_BOARD.replace(
            '{boardId}',
            boardId
        )
    }

    deleteBoardById(boardId) {
        return BoardsEndpointConstants.DELETE_BOARD.replace(
            '{boardId}',
            boardId
        )
    }
}