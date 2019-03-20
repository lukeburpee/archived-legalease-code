import React, {Component, PropTypes} from 'react';
import {TableHeader, TableRow} from 'material-ui/Table';
import {Toolbar} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import DoubleChevronLeft from 'material-ui/svg-icons/navigation/first-page';
import DoubleChevronRight from 'material-ui/svg-icons/navigation/last-page';
// customized components
import DataTablesTable from './DataTablesTable';
import DataTablesTableBody from './DataTablesTableBody';
import DataTablesHeaderColumn from './DataTablesHeaderColumn';
import DataTablesRow from './DataTablesRow';
import DataTablesRowColumn from './DataTablesRowColumn';
import DataTablesHeaderToolbar from './DataTablesHeaderToolbar';

function getStyles(props, context) {
  const {
    baseTheme: {
      palette,
    },
    table,
    tableHeaderColumn,
  } = context.muiTheme;

  return {
    tableHeaderColumn: {
      fontWeight: 600,
    },
    footerToolbar: {
      backgroundColor: table.backgroundColor,
      borderTop: `1px solid ${palette.borderColor}`,
    },
    footerLeftControlGroup: {
      fontSize: 12,
      color: tableHeaderColumn.textColor,
      marginRight: 'auto',
      display: 'flex',
    },
    footerControlGroup: {
      fontSize: 12,
      color: tableHeaderColumn.textColor,
      marginLeft: 'auto',
      display: 'flex',
    },
    footerToolbarItem: {
      marginLeft: 8,
      marginRight: 8,
      alignItems: 'center',
      display: 'flex',
    },
    paginationButtons: {
      marginLeft: 24,
    },
    paginationButton: {
      minWidth: 36,
      opacity: 0.54,
    },
    rowSizeMenu: {
      color: tableHeaderColumn.textColor,
    },
  };
}

class DataTables extends Component {
  static muiName = 'DataTables';

  static propTypes = {
    adjustForCheckbox: PropTypes.bool,
    columns: PropTypes.array.isRequired,
    count: PropTypes.number,
    data: PropTypes.array,
    deselectOnClickaway: PropTypes.bool,
    enableSelectAll: PropTypes.bool,
    filterHintText: PropTypes.string,
    fixedFooter: PropTypes.bool,
    fixedHeader: PropTypes.bool,
    height: PropTypes.string,
    multiSelectable: PropTypes.bool,
    onCellClick: PropTypes.func,
    onCellDoubleClick: PropTypes.func,
    onFilterValueChange: PropTypes.func,
    onNextPageClick: PropTypes.func,
    onPreviousPageClick: PropTypes.func,
    onRowSelection: PropTypes.func,
    onRowSizeChange: PropTypes.func,
    onSortOrderChange: PropTypes.func,
    page: PropTypes.number,
    rowSize: PropTypes.number,
    rowSizeLabel: PropTypes.string,
    rowSizeList: PropTypes.array,
    selectable: PropTypes.bool,
    showCheckboxes: PropTypes.bool,
    showHeaderToolbar: PropTypes.bool,
    showRowHover: PropTypes.bool,
    stripedRows: PropTypes.bool,
    summaryLabelTemplate: PropTypes.func,
    summaryPagesTemplate: PropTypes.func,
    title: PropTypes.string,
    toolbarIconRight: PropTypes.node,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  static defaultProps = {
    rowSize: 10,
    rowSizeLabel: 'Rows per page:',
    rowSizeList: [10, 30, 50, 100],
    summaryLabelTemplate: (start, end, count) => {
      return `${start} - ${end} of ${count}`;
    },
    summaryPagesTemplate: (page, pages) => {
      return `${page} of ${Math.ceil(pages)}`;
    },
    filterHintText: 'Search',
    columns: [],
    data: [],
    page: 1,
    pages: null,
    count: 0,
    fixedHeader: false,
    fixedFooter: false,
    stripedRows: false,
    showRowHover: false,
    selectable: false,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: false,
    showCheckboxes: false,
    height: 'inherit',
    showHeaderToolbar: false,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      sort: {
        column: '',
        order: 'asc',
      },
    };
  }

  handleHeaderColumnClick = (event, rowIndex, columnIndex) => {
    const adjustedColumnIndex = this.props.showCheckboxes ? columnIndex - 1 : columnIndex - 1;
    const column = this.props.columns[adjustedColumnIndex];
    if (column && column.sortable) {
      const {sort} = this.state;
      const {onSortOrderChange} = this.props;
      const key = column.key;
      const order = sort.column === column.key && sort.order === 'asc' ? 'desc' : 'asc';
      this.setState({
        sort: {
          column: key,
          order: order,
        },
      });
      if (onSortOrderChange) {
        onSortOrderChange(key, order);
      }
    }
  }

  handleCellClick = (rowIndex, columnIndex, event) => {
    const {onCellClick, selectable} = this.props;
    if (onCellClick && !selectable) {
      const adjustedColumnIndex = this.props.showCheckboxes ? columnIndex : columnIndex - 1;
      onCellClick(
        rowIndex,
        adjustedColumnIndex,
        // row data
        this.props.data[rowIndex],
        // clicked column
        this.props.data[rowIndex][this.props.columns[adjustedColumnIndex].key],
        event
      );
    }
  }

  handleCellDoubleClick = (rowIndex, columnIndex, event) => {
    const {onCellDoubleClick, selectable} = this.props;
    if (onCellDoubleClick && !selectable) {
      const adjustedColumnIndex = this.props.showCheckboxes ? columnIndex : columnIndex - 1;
      onCellDoubleClick(
        rowIndex,
        adjustedColumnIndex,
        // row data
        this.props.data[rowIndex],
        // clicked column
        this.props.data[rowIndex][this.props.columns[adjustedColumnIndex].key],
        event
      );
    }
  }

  handleRowSizeChange = (event, index, value) => {
    const {onRowSizeChange} = this.props;
    if (onRowSizeChange) {
      onRowSizeChange(index, value);
    }
  }

  handlePreviousPageClick = (event) => {
    const {onPreviousPageClick} = this.props;
    if (onPreviousPageClick) {
      onPreviousPageClick(event);
    }
  }

  handleNextPageClick = (event) => {
    const {onNextPageClick} = this.props;
    if (onNextPageClick) {
      onNextPageClick(event);
    }
  }

  handleFilterValueChange = (value) => {
    const {onFilterValueChange} = this.props;
    if (onFilterValueChange) {
      onFilterValueChange(value);
    }
  }

  handleRowSelection = (selectedRows) => {
    const {onRowSelection} = this.props;
    if (onRowSelection) {
      onRowSelection(selectedRows);
    }
  }

  render() {
    const {
      title,
      filterHintText,
      fixedHeader,
      fixedFooter,
      stripedRows,
      showRowHover,
      selectable,
      multiSelectable,
      enableSelectAll,
      deselectOnClickaway,
      showCheckboxes,
      height,
      showHeaderToolbar,
      rowSize,
      rowSizeLabel,
      rowSizeList,
      summaryLabelTemplate,
      summaryPagesTemplate,
      columns,
      data,
      page,
      toolbarIconRight,
      count,
      ...other, // eslint-disable-line no-unused-vars, comma-dangle
    } = this.props;

    const styles = getStyles(this.props, this.context);

    let start = (page - 1) * rowSize + 1;
    let end = (page - 1) * rowSize + rowSize;
    const totalCount = count === 0 ? data.length : count;
    let pageTotal = (totalCount/rowSize);
    let previousButtonDisabled = page === 1;
    let nextButtonDisabled = false;
    if (totalCount === 0) {
      start = 0;
      previousButtonDisabled = true;
    } else if (start > totalCount) {
      start = 1;
      previousButtonDisabled = true;
    }
    if (end >= totalCount) {
      end = totalCount;
      nextButtonDisabled = true;
    }

    let headerToolbar;
    if (showHeaderToolbar) {
      headerToolbar = (
        <DataTablesHeaderToolbar
          filterHintText={filterHintText}
          title={title}
          onFilterValueChange={this.handleFilterValueChange}
          toolbarIconRight={toolbarIconRight}
        />
      );
    }

    return (
      <div>
        {headerToolbar}
        <DataTablesTable
          height={height}
          fixedHeader={fixedHeader}
          fixedFooter={fixedFooter}
          selectable={selectable}
          multiSelectable={multiSelectable}
          onCellClick={this.handleCellClick}
          onCellDoubleClick={this.handleCellDoubleClick}
          onRowSelection={this.handleRowSelection}
        >
          <TableHeader
            displaySelectAll={showCheckboxes}
            adjustForCheckbox={showCheckboxes}
            enableSelectAll={enableSelectAll}
          >
            <TableRow onCellClick={this.handleHeaderColumnClick}>
              {columns.map((row, index) => {
                const style = Object.assign({}, styles.tableHeaderColumn, row.style || {});
                const sortable = row.sortable;
                const sorted = this.state.sort.column === row.key;
                const order = sorted ? this.state.sort.order : 'asc';
                return (
                  <DataTablesHeaderColumn
                    key={index}
                    style={style}
                    tooltip={row.tooltip}
                    sortable={sortable}
                    sorted={sorted}
                    order={order}
                  >
                    <span>{row.label}</span>
                  </DataTablesHeaderColumn>
                );
              }, this)}
            </TableRow>
          </TableHeader>
          <DataTablesTableBody
            displayRowCheckbox={showCheckboxes}
            deselectOnClickaway={deselectOnClickaway}
            showRowHover={showRowHover}
            stripedRows={stripedRows}
          >
            {data.map((row, index) => {
              return (
                <DataTablesRow style={styles.tableRow} key={index} selected={row.selected}>
                  {columns.map((mrow, index) => {
                    return (
                      <DataTablesRowColumn
                        style={mrow.style}
                        key={index}
                      >
                        {row[mrow.key]}
                      </DataTablesRowColumn>
                    );
                  })}
                </DataTablesRow>
              );
            })}
          </DataTablesTableBody>
        </DataTablesTable>
        <Toolbar style={styles.footerToolbar}>
          <div style={styles.footerLeftControlGroup}>
            <div style={styles.footerToolbarItem}>
              <DropDownMenu
                labelStyle={styles.rowSizeMenu}
                value={'selected'}
                onChange={this.handleRowSizeChange}>
                <MenuItem
                  key={'selected'}
                  value={'selected'}
                  primaryText={'Selected'}/>
                <MenuItem
                  key={'page'}
                  value={'page'}
                  primaryText={'Page'}/>
                <MenuItem
                  key={'all'}
                  value={'all'}
                  primaryText={'All'}/>
              </DropDownMenu>
            </div>
            <div style={styles.footerToolbarItem}>
              <DropDownMenu
                labelStyle={styles.rowSizeMenu}
                value={'edit'}
                onChange={this.handleRowSizeChange}>
                <MenuItem
                  key={'edit'}
                  value={'edit'}
                  primaryText={'Edit'}/>
                <MenuItem
                  key={'stats'}
                  value={'stats'}
                  primaryText={'Stats'}/>
                <MenuItem
                  key={'to_pdf'}
                  value={'to_pdf'}
                  primaryText={'To Pdf'}/>
              </DropDownMenu>
            </div>
          </div>
          <div style={styles.footerControlGroup}>
            <div style={styles.footerToolbarItem}>
              <div>{rowSizeLabel}</div>
            </div>
            <DropDownMenu
              labelStyle={styles.rowSizeMenu}
              value={rowSize}
              onChange={this.handleRowSizeChange}
            >
              {rowSizeList.map((rowSize) => {
                return (
                  <MenuItem
                    key={rowSize}
                    value={rowSize}
                    primaryText={rowSize}
                  />
                );
              })}
            </DropDownMenu>
            <div style={styles.footerToolbarItem}>
              <div>{summaryLabelTemplate(start, end, totalCount)}</div>
            </div>
            <div style={Object.assign(styles.paginationButtons, styles.footerToolbarItem)}>
              <FlatButton
                icon={<DoubleChevronLeft />}
                style={styles.paginationButton}
                onClick={this.handlePreviousPageClick}
                disabled={previousButtonDisabled}
              />
              <FlatButton
                icon={<ChevronLeft />}
                style={styles.paginationButton}
                onClick={this.handlePreviousPageClick}
                disabled={previousButtonDisabled}
              />
              <div style={styles.footerToolbarItem}>
              {summaryPagesTemplate(page, pageTotal)}
              </div>
              <FlatButton
                icon={<ChevronRight />}
                style={styles.paginationButton}
                onClick={this.handleNextPageClick}
                disabled={nextButtonDisabled}
              />
              <FlatButton
                icon={<DoubleChevronRight />}
                style={styles.paginationButton}
                onClick={this.handlePreviousPageClick}
                disabled={previousButtonDisabled}
              />
            </div>
          </div>
        </Toolbar>
      </div>
    );
  }
}

export default DataTables;
