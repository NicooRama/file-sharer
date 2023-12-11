import {FileTable} from "./FileTable";
import {render} from "../../../test/test.utils";

describe('<FileTable />', () => {
    it('renders <FileTable /> successfully', () => {
        const {getByTestId} = render(<FileTable data-testid={'file-table'}/>)
        expect(getByTestId('file-table')).toBeInTheDocument();
    });
});
    