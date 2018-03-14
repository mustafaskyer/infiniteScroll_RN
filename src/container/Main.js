import React, { Component } from 'react'
import {
    View,
    ScrollView,
    ActivityIndicator,
    ListView
} from 'react-native'
//@native base
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon } from 'native-base';
//@loader
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
//@lodash
import _ from 'lodash'
//@moment
import moment from 'moment'
// @redux connect
import { connect } from 'react-redux'
// @redux actions
import { getPosts, getMorePosts } from '../redux/actions'

// @components
import BTN from './Button'
import Post from './Posts'
// @styles
import styles from './Styles'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class Main extends Component{

    constructor(){
        super();
        this.state = {
            footerStatus: false,
            morePosts:[],
            nextPage: null,
            count: 0
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.posts.morePosts){
            this.setState({ 
                morePosts: this.state.morePosts.concat(nextProps.posts.morePosts.results) , 
                nextPage: nextProps.posts.morePosts.info.page , footerStatus: false
            })
        }
    }

    _renderSpOrText(){
        if(this.props.posts.loading){
            return <Bars size={10} color="#fff" />
        }

        return <Text style={styles.white}>Load</Text>
    }

    _renderPost(results){
         return _.map(results,(item,i) => {
            return(              
              <Post
                key={i}
                uri={item.picture.thumbnail}
                name={`${item.name.title}, ${item.name.first} ${item.name.last}`}
                desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                date={moment(item.registered).format('dddd')}
              />
            )
        })
    }

    _loadMorePosts(){

        this.setState({ footerStatus: true });
         let nextPage = this.state.nextPage ? ++this.state.nextPage : this.props.posts.posts.info.page++;
         this.props.getMorePosts(nextPage)

    }

    _renderSpinn(){
        if(this.state.footerStatus){
            return <ActivityIndicator style={styles.spinner} color='red' />
        }

        return <View style={styles.mainContainer} />;
    }



    _renderBtnOrContent(){
        if(this.props.posts.recievedPosts){
                const { results } = this.props.posts.posts;
                const morePosts = this.props.posts.morePosts ? this.props.posts.morePosts.results : []
                let all = results.concat(this.state.morePosts)
                return (
                    <View>
                        <View style={styles.countStyle}>
                            <Text style={styles.twitter}>@skirmustafa <Icon style={styles.twitterLogo} name="logo-twitter" size={10} /></Text>
                            <Text>Count <Text style={styles.bold}>{all.length}</Text></Text>
                        </View>
                        <View style={styles.mainContainer}>
                        <View>
                            <ListView
                            dataSource={ds.cloneWithRows(all)}
                            renderRow={(item,i) => {
                                return(
                                    <Post
                                    key={i}
                                    uri={item.picture.thumbnail}
                                    name={`${item.name.title}, ${item.name.first} ${item.name.last}`}
                                    desc="t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
                                    date={moment(item.registered).format('dddd')}
                                  /> 
                                )
                            }}
                            
                            onEndReached = {this._loadMorePosts.bind(this)}
                            onEndReachedThreshold={0}
                            onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                            renderFooter={this._renderSpinn.bind(this)}
                            />
                        </View>
                    </View>
                    </View>
                   
                )
        }

        return (
            <ScrollView style={[styles.mainContainer,]}>
                <Header style={styles.headerName}>
                    <Text style={[styles.nameText,{ fontWeight: '800' }]}>Mustafa Skyer</Text>
                    <Text style={[styles.nameText,{ height:60, textAlign: 'center'}]}>INFINITE SCROLL RN</Text>
                </Header>
                <View style={{ padding: 25 }}>
                        <Text style={styles.headerDesc}>@redux @saga @nativebase @axios @react-native-loader</Text>
                    </View>

                  <BTN color= '#d22838' onPress={() => this.props.getPosts()} >
                    {this._renderSpOrText()}
                </BTN>
                
            </ScrollView>
        )
        
    }
    render(){
        return(
            <View style={styles.mainContainer}>
                {this._renderBtnOrContent()}
            </View>
        )
    }
}

// map states to component
const mapStateToProps = state => {  
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { getPosts, getMorePosts })(Main)