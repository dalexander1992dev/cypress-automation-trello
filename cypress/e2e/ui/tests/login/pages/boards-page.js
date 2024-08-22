import { BoardsLocators } from "../constants/boards-ui-constants"
import { LabelComponent } from "../../../components/label-component"

export class BoardsPage {
	constructor() {
		this.boardTitleLabel = new LabelComponent(BoardsLocators.BOARD_TITLE_LABEL)		
	}

	validateBoarTitleText(expectedText){
		this.boardTitleLabel.containsText(expectedText)
	}
}