import {FileRow} from "./FileRow";
import {render} from "../../../test/test.utils";

describe('<FileRow />', () => {
    it('renders <FileRow /> successfully', () => {
        const {getByTestId} = render(<FileRow data-testid={'file-row'}/>)
        expect(getByTestId('file-row')).toBeInTheDocument();
    });
});
    