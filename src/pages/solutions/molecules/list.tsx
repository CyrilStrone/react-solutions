import { CodeBlock } from "react-code-blocks"
import { SolutionList } from "../../../code-blocks/solution-list"
import "../styles/solutions-list.css"

export const List = () => {
    return (
        <div className="Solutions__List">
            {
                SolutionList.map((item: any) =>
                    <div className="Solutions__List__Item">
                        <div className="Solutions__List__Item__Title">{item.text}</div>
                        <CodeBlock
                            text={item.code}
                            language={'typescript'}
                            showLineNumbers
                            theme={'dracula'}
                            customStyle={{
                                overflow: 'scroll',
                              }}
                        />
                    </div>
                )
            }
        </div>
    )
}
