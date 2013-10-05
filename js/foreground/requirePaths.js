var require = {
    baseUrl: '../js/',
    paths: {
        //  Global:
        'youTubeDataAPI': 'youTubeDataAPI',
        'utility': 'utility',
        
        //  Enum:
        'dataSource': 'enum/dataSource',
        'playerState': 'enum/playerState',
        'repeatButtonState': 'enum/repeatButtonState',

        //  Third Party:
        'backbone': 'thirdParty/backbone',
        'jquery': 'thirdParty/jquery',
        'jqueryUi': 'thirdParty/jqueryUi',
        'lazyload': 'thirdParty/jquery.lazyload',
        'levenshtein': 'thirdParty/levenshtein',
        'scrollIntoView': 'thirdParty/jquery.scrollIntoView',
        'sly': 'thirdParty/sly',
        'underscore': 'thirdParty/underscore',

        //  Foreground:
        'main': 'foreground/main',
        'foreground': 'foreground/foreground',
        'newForeground': 'foreground/newForeground',

        //  Collection:
        'contextMenuGroups': 'foreground/collection/contextMenuGroups',
        'contextMenuItems': 'foreground/collection/contextMenuItems',
        'streamItems': 'foreground/collection/streamItems',
        'videoSearchResultItems': 'foreground/collection/videoSearchResultItems',

        //  Model:
        'activePlaylistArea': 'foreground/model/activePlaylistArea',
        'contextMenu': 'foreground/model/contextMenu',
        'contextMenuGroup': 'foreground/model/contextMenuGroup',
        'contextMenuItem': 'foreground/model/contextMenuItem',
        'dialog': 'foreground/model/dialog',
        'player': 'foreground/model/player',
        'reloadPrompt': 'foreground/model/reloadPrompt',
        'settings': 'foreground/model/settings',
        'spinnerBuilder': 'foreground/model/spinnerBuilder',
        'videoSearch': 'foreground/model/videoSearch',
        'videoSearchResultItem': 'foreground/model/videoSearchResultItem',
        
        //  Model -> Buttons:
        'playPauseButton': 'foreground/model/buttons/playPauseButton',
        
        //  View:
        'contentHeaderView': 'foreground/view/contentHeaderView',
        'contextMenuView': 'foreground/view/contextMenuView',
        'dialogView': 'foreground/view/dialogView',
        'headerTitleView': 'foreground/view/headerTitleView',
        'loadingSpinnerView': 'foreground/view/loadingSpinnerView',
        'progressBarView': 'foreground/view/progressBarView',
        'reloadPromptView': 'foreground/view/reloadPromptView',
        'volumeControlView': 'foreground/view/volumeControlView',
        
        //  View -> Buttons:
        'nextButtonView': 'foreground/view/buttons/nextButtonView',
        'playPauseButtonView': 'foreground/view/buttons/playPauseButtonView',
        'previousButtonView': 'foreground/view/buttons/previousButtonView',
        'radioButtonView': 'foreground/view/buttons/radioButtonView',
        'repeatButtonView': 'foreground/view/buttons/repeatButtonView',
        'shuffleButtonView': 'foreground/view/buttons/shuffleButtonView',
        
        //  View -> ActiveFolderTab:
        'activeFolderTabView': 'foreground/view/activeFolderTab/activeFolderTabView',
        'activeFolderView': 'foreground/view/activeFolderTab/activeFolderView',
        'playlistInputView': 'foreground/view/activeFolderTab/playlistInputView',
        'playlistView': 'foreground/view/activeFolderTab/playlistView',

        //  View -> ActivePlaylistTab:
        'activePlaylistAreaView': 'foreground/view/activePlaylistTab/activePlaylistAreaView',
        'activePlaylistItemsView': 'foreground/view/activePlaylistTab/activePlaylistItemsView',
        'playlistItemInputView': 'foreground/view/activePlaylistTab/playlistItemInputView',
        'playlistItemView': 'foreground/view/activePlaylistTab/playlistItemView',
        
        //  View -> Stream:
        'streamItemView': 'foreground/view/stream/streamItemView',
        'streamView': 'foreground/view/stream/streamView',
        
        //  View -> Video:
        'videoDisplayView': 'foreground/view/video/videoDisplayView',
        
        //  View -> VideoSearch:
        'videoSearchResultItemView': 'foreground/view/videoSearch/videoSearchResultItemView',
        'videoSearchResultsView': 'foreground/view/videoSearch/videoSearchResultsView',
        'videoSearchView': 'foreground/view/videoSearch/videoSearchView',
    }
};