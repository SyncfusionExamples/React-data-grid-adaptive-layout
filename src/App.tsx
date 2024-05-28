import {
  ColumnDirective, ColumnsDirective, EditSettingsModel, FilterSettingsModel, GridComponent, Inject, Filter, Sort,
  Edit, Toolbar, Page
} from '@syncfusion/ej2-react-grids';
import { data } from './data';
import './App.css';

const App = () => {
  const editSettings: EditSettingsModel =
  {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: 'Dialog'
  };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  const validationRule = { required: true };
  const orderidRules = { required: true, number: true };
  const filterOptions: FilterSettingsModel = { type: 'Excel' };
  let menuFilter = { type: 'Menu' };
  let checkboxFilter = { type: 'CheckBox' };
  return (
    <div className="e-bigger">
      <GridComponent id="adaptivebrowser" dataSource={data} height='100%' allowFiltering={true} allowSorting={true}
        allowPaging={true} filterSettings={filterOptions} toolbar={toolbarOptions} editSettings={editSettings}
        enableAdaptiveUI={true} rowRenderingMode='Vertical'>
        <ColumnsDirective>
          <ColumnDirective field='SNO' headerText='S NO' width='150' isPrimaryKey={true}
            validationRules={orderidRules} />
          <ColumnDirective field='Model' headerText='Model Name' width='200' editType='dropdownedit'
            validationRules={validationRule} />
          <ColumnDirective field='Developer' headerText='Developer' width='200' filter={menuFilter}
            validationRules={validationRule} />
          <ColumnDirective field='ReleaseDate' headerText='Released Date' editType='datepickeredit' type='date'
            format='yMMM' width='200' />
          <ColumnDirective field='AndroidVersion' headerText='Android Version' width='200' filter={checkboxFilter}
            validationRules={validationRule} />
        </ColumnsDirective>
        <Inject services={[Filter, Sort, Edit, Toolbar, Page]} />
      </GridComponent>
    </div>
  );
}
export default App;