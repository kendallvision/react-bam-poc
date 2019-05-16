import React, {Component} from 'react'
import './App.css'

export class WorkflowSummaryTest extends Component {
    render() {

        let taskOptions = [{ "name": "Legal Name Change", "value": "Legal Name Change" }];

        return (
            <div>
                <bam-security></bam-security>
                <bam-workflow-summary region="PA03" companyCode='001' taskOptions={taskOptions}></bam-workflow-summary>
            </div>
        )
    }
}
