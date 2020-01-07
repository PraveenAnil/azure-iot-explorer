/***********************************************************
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License
 **********************************************************/
import { compose, Dispatch } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import DirectMethod, { DirectMethodProps } from './directMethod';
import { StateType } from '../../../../shared/redux/state';
import { NonFunctionProperties, FunctionProperties } from '../../../../shared/types/types';
import { InvokeMethodParameters } from '../../../../api/parameters/deviceParameters';
import { invokeDirectMethodAction } from '../../actions';
import { getActiveAzureResourceConnectionStringSelector } from '../../../../azureResource/selectors';

const mapStateToProps = (state: StateType): NonFunctionProperties<DirectMethodProps> => {
    return {
        connectionString: getActiveAzureResourceConnectionStringSelector(state)
    };
};

const mapDispatchToProps = (dispatch: Dispatch): FunctionProperties<DirectMethodProps> => {
    return {
        onInvokeMethodClick: (parameters: InvokeMethodParameters) => dispatch(invokeDirectMethodAction.started(parameters))
    };
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(DirectMethod);
