import { HeaderPage } from "../pages/header-page"
import { CreateBoardPage } from "../pages/create-board-page"
import { BoardsPage } from "../pages/boards-page"
import { BoardsApiHelper } from "../../../../api/tests/boards/helpers/boards-api-helper"
import createBoardData from '../../../../../fixtures/api/boards/requestsBody/board-create-body.json'

const headerPage = new HeaderPage()
const createBoardPage = new CreateBoardPage()
const boardsApiHelper = new BoardsApiHelper()
const boardPage = new BoardsPage()

describe('UI - Dashboard Test Suite', {},

function(){
    const credentials = { 
        'username': Cypress.env('credentials').userName,
        'password' : Cypress.env('credentials').userPassword
    }

	this.beforeEach(()=>{
		cy.uiLogin(credentials)
		boardsApiHelper.deleteAllBoards()
	})

	it('UI - Create a board', {}, () => {
        const boardName = createBoardData.name

        headerPage.navigateToCreateBoard()
            createBoardPage.createNewBoard(boardName)
			boardPage.validateBoarTitleText(boardName)		
	})	

})