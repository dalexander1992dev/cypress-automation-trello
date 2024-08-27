import { ButtonComponent } from "../../../components/button-component"
import { HeaderLocators } from "../constants/header-ui-constanst"

export class HeaderPage {
    constructor(){
        this.createBoardHeaderButton = new ButtonComponent(HeaderLocators.CREATE_BOARD_HEADER_BUTTON)
        this.createBoardButton = new ButtonComponent(HeaderLocators.CREATE_BOARD_BUTTON)
    }

    navigateToCreateBoard(){
        this.createBoardHeaderButton.click()
        this.createBoardButton.click()
    }
}
