import React, {Component} from 'react'
import './App.css'

export class WorkflowSummaryTest extends Component {

    render() {
        // TODO: Make a determination of what BAM server to call based on what CEH environment we are deployed in (For example: DIT vs FIT vs IAT).  Set that value as the override below.
        return (
            <div>
                <bam-baseapi-override override='http://bam-dit.oneadp.com'></bam-baseapi-override>
                <bam-security id='security'></bam-security>
                <bam-workflow-summary id='workflowSummary'></bam-workflow-summary>
            </div>
        )
    }

    componentDidMount() {
        const security = document.getElementById('security');
        const workflowSummary = document.getElementById('workflowSummary');

        // TODO: gather and pass credentials of CEH user.  Could change authentication call to Windows LDAP or use UserId or keep using Email.
        const currentRegion = 'PA03';
        const userEmail = 'rick.beley@adp.com';
        const appKey = "CEH";
        const companyCode = 'zzz';


        customElements.whenDefined(security.localName).then(function() {
          security.addEventListener('bam-security-authenticated', function(e) {
            workflowSummary.token = e.detail.token;
            workflowSummary.taskOptions = [{'name': 'Legal Name Change', 'value': 'Legal Name Change'}];
            workflowSummary.region = currentRegion;
            workflowSummary.companyCode = companyCode;

            workflowSummary.getSummaryData();
          });

          workflowSummary.addEventListener('workflow-summary-start-clicked', function(e) {
            // TODO: Place CEH code to navigate to new workflow creation page
            alert(`'Start a new workflow: ${e.detail.workflowType}`);
          });

          workflowSummary.addEventListener('workflow-summary-view-clicked', function(e) {
              // TODO: Place CEH code to navigate to workflow dashboard page
              alert('View all workflows clicked');
          });

          workflowSummary.addEventListener('workflow-summary-item-clicked', function(e) {
              // TODO: Place CEH code to navigate to workflow detail display for the specified existing workflow
              alert(`Workflow clicked.  Navigate to detail display for Workflow: ${e.detail.workflowId} (ReferenceId: ${e.detail.referenceId})`);
          })

          security.authenticateWithEmail(userEmail, currentRegion, appKey);
        });
    }
}
