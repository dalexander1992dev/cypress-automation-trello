import { InputComponent } from "../../../components/input-component"
import { ButtonComponent } from "../../../components/button-component"
import { CreateBoardLocators } from "../constants/create-board-ui-constants"

export class CreateBoardPage {
    constructor(){
        this.boardTitleInput = new InputComponent(CreateBoardLocators.BOARD_TITLE_INPUT)
        this.createBoardButton = new ButtonComponent(CreateBoardLocators.CREATE_BOARD_BUTTON)
    }

    createNewBoard(newBoardName){
        this.boardTitleInput.type(newBoardName)
        this.createBoardButton.click()
    }
}
