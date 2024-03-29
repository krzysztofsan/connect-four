import { Board, initBoard } from "../../src/redux/game/model";

describe("Init board", () => {

    it("should initialize the board with default values", () => {
        const expectedBoard: Board = {
            fields: [
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ],
                [ "", "", "", "", "", "" ]
            ],
            width: 7,
            height: 6,
            emptyValue: "",
            winningCount: 4
        };
        const newBoard = initBoard();

        expect(newBoard).toEqual(expectedBoard);
    });

    it("should initialize the board with custom values", () => {
        const expectedBoard: Board = {
            fields: [
                [ "0", "0", "0", "0", "0", "0", "0", "0", "0", "0" ],
                [ "0", "0", "0", "0", "0", "0", "0", "0", "0", "0" ],
                [ "0", "0", "0", "0", "0", "0", "0", "0", "0", "0" ]
            ],
            width: 3,
            height: 10,
            emptyValue: "0",
            winningCount: 1
        };
        const newBoard = initBoard(3, 10, "0", 1);

        expect(newBoard).toEqual(expectedBoard);
    });

});
