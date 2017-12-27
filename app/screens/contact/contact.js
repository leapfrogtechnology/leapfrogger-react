import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  FlatList,
  ListView,
  SectionList,
  Platform,
  ActivityIndicator,
  LayoutAnimation,
 } from 'react-native';
 
import Swiper from 'react-native-swiper'; 
import Search from 'react-native-search-box';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import colors from 'App/config/colors';
import ContactCell from './contactCell';
import Button from 'App/components/Button';
import screens from 'App/constants/screens';
import * as util from 'App/utils/dataNormalization';
import SearchContactView from 'App/screens/searchContact';
import { getWidth, getHeight } from 'App/utils/dimension';
import StateFullScreen from 'App/components/stateFullScreen';
import { searchEmployeesOfName } from 'App/utils/dataNormalization';

import style, { AVATAR_SIZE, STICKY_HEADER_HEIGHT, DOT_MARGIN, PARALLAX_HEADER_HEIGHT } from './styles';

const GUEST_EMAIL = 'guest@lftechnology.com'
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

 class ContactScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isSearching: false,      
      currentSwipeIndex: 0,
      searchedEmployees: [],
      screenState: 'normal',
      selectedEmpId: null,
      dataSource: ds.cloneWithRows(this.props.employees),
    }
  }

  componentDidMount() {
    // this._animateOnMount();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    if (this.props.user.email === GUEST_EMAIL) {      
      var empjson = require('./../../../guestEmp.json'); //(with path)
      var departmentjson = require('./../../../guestDepartment.json'); //(with path)
      this.props.setGuestEmployeeAndDepartment(empjson, departmentjson)
    } else {
      if ((this.props.employees.length === 0) || (this.props.departments.length === 0)) { 
        this.props.fetchEmployeesAndDepartments() 
      }      
    }
  }

  _onSearchBarTextChange = (text) => {
    var employees = searchEmployeesOfName(this.props.employees, text);    
    this.setState({ searchedEmployees: employees });    
  }

  _onSearchBarFocus = () => {
    this.timeout = setTimeout(() => {
      this.setState({ isSearching: true });
    }, 300);
  }

  _onReturnAction = () => {
    // also cancels on done button action 
    this._onSearchCancel();     
  }

  _onSearchCancel = () => {
    this.timeout = setTimeout(() => {
      this.setState({ searchedEmployees: [] });
      this.setState({ isSearching: false });   
    }, 300); 
  }

  _onCellSelection = (data) => {
    this.props.navigator.push({
      screen: screens.PROFILE_SCREEN.id,
      animated: true,
      navigatorStyle: {
        drawUnderNavBar: true,
        navBarTranslucent: true,
        navBarTransparent: true,
        navBarTextColor: 'white',
        navBarTransparency: 1,  
        navBarButtonColor: 'white',                  
        navBarLeftButtonColor: 'white',
        navBarRightButtonColor: 'white',
      },
      title: '',
      passProps: {
        data: {
          profile: data
        }
      }        
    });
  }

  _moreButtonOnPress = (empId) => {
    if (this.state.selectedEmpId === empId) {
      //If same more button is pressed even times, it needs to close
      this.setState({selectedEmpId: null})
    } else {
      // Odd time press opens the button
      this.setState({selectedEmpId: empId})
    }
  }

  _renderTableView = (employees) => {
    return (
      <ListView
        ref="ListView"
        key={'index'}
        // sections={util.groupByAlphabets(employees.data)}
        dataSource={this.state.dataSource}
        // dataSource={(item, index) => index}
        renderRow={(item, index) => 
          <ContactCell 
            // {...this.props}          
            data={item} 
            onPress={this._onCellSelection}
            moreButtonAction={this._moreButtonOnPress}/>
          }
        stickySectionHeadersEnabled={true}
        renderSectionHeader={(section) => <Text style={style.sectionHeader}>a</Text>}
        // renderSeparator={() => <View style={{backgroundColor: colors.GRAY, height: 1, width: 200, marginBottom: -1}}></View>}
      />
    );
  }

  _onMomentumScrollEnd = (index) => {
    this.setState({
      currentSwipeIndex: index,
    })
  }

  _groupAllEmployeesWithGroupedEmployees = () => {
    return allEmp = [{title: 'All', data: this.props.employees}]
    // return allEmp.concat(this.props.groupedEmp)
  }

  _renderStatusBar = () => {
    return (
      <View style={[style.statusBar, {height: 20}]}/>
    )
  }

  _renderSearchBar = () => {
    return (
      <Search
        ref={component => this.searchBar = component}
        backgroundColor={colors.IOS_GREEN}
        titleCancelColor='white'
        onChangeText={(text) => this._onSearchBarTextChange(text)}
        onFocus={() => this._onSearchBarFocus()}
        afterSearch={() => this._onReturnAction()}
        afterCancel={() => this._onSearchCancel()}
        keyboardDismissOnSubmit={true}
        returnKeyType={'done'}
        blurOnSubmit={true}
      />
    )
  }

  _renderSwiper = () => {
    return (
      // <Swiper
      //   style={style.wrapper}
      //   loop={false} 
      //   bounces={true}
      //   onIndexChanged ={this._onMomentumScrollEnd}          
      //   activeDotStyle={{marginBottom: DOT_MARGIN}} 
      //   activeDotColor={colors.LF_DARK_GRREEN}
      //   dotStyle={{marginBottom: DOT_MARGIN}}>
      //     {
      //       this._groupAllEmployeesWithGroupedEmployees().map((data, index) => this._renderTableView(data, index))
      //     }
      // </Swiper>
      <View style={style.wrapper}>
        {
          // this._groupAllEmployeesWithGroupedEmployees().map((data, index) => this._renderTableView(data, index))
          this._renderTableView()
        }
      </View>
    )
  }

  _renderSearchView = () => {
    return (
      <View style={style.searchViewContainer}>
        <SearchContactView
          // {...this.props}
          data={this.state.searchedEmployees}
          onPress={this._onCellSelection}
        />
        <KeyboardSpacer/>
      </View>
    )
  }

  _getScreenState = () => {
    if (this.props.isFetching) {
      return 'fetch';
    }
    if (this.props.employees.length > 0 || this.props.departments.length > 0) {
      return 'normal'
    }
    return 'error'; // error or empty
  }

  render() {
    return (
      <View style={ style.mainContainer }>
        { this._renderStatusBar() }
        <View style={style.searchContainer}>
          { this._renderSearchBar() }
        </View>
        <View style={[style.tableContainer, {marginBottom: Platform.OS === 'android' ? -200 : 0}]}>
          {/* {
            <View style={style.stickyDepartmentSection}>
              <Text style={style.departmentNameText}>{this.props.departments[this.state.currentSwipeIndex].name}</Text>
            </View> 
          } */}
          {                         
            <StateFullScreen
              style={style.mainContainer}
              state={this._getScreenState()} // fetch, normal and error
              contentView={this._renderSwiper()}
              reloadButtonAction={() => this.props.fetchEmployeesAndDepartments()}
            />
          }
          {
            ((this._getScreenState() === 'normal') && (this.state.isSearching)) &&
            this._renderSearchView()
          }
        </View>
      </View>
    );
  }

 }

 export default ContactScreen;
