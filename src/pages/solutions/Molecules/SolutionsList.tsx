import { CodeBlock } from "react-code-blocks"
import { SolutionList } from "../../../CodeBlocks/SolutionList"
import "../Styles/SolutionsList.css"

export const List = () => {
    return (
        <div className="SolutionsList">
            {
                SolutionList.map((item: any) =>
                    <div className="SolutionsList__Item">
                        <div className="SolutionsList__Item__Title">{item.text}</div>
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
