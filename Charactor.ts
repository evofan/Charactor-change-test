const {ccclass, property} = cc._decorator;

@ccclass
export default class Charactor extends cc.Component {

    @property(cc.Node)
    canvas: cc.Node = null;

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Node)
    chara: cc.Node = null;

    @property(cc.Animation)
    anim: cc.Animation = null;
    
    @property(cc.AnimationClip)
    clips: cc.AnimationClip[] = null;

    @property
    count: number = 0;
    countMax: number = 0;

    onLoad() {

        cc.log(this);
        cc.log(this.canvas);
        cc.log(this.label);
        cc.log(this.chara);
        
        // キャラクターに（インスペクタ上で）設定されているアニメーションのプロパティを取得
        this.anim = this.chara.getComponent(cc.Animation);
        cc.log(this.anim);

        // 再生するアニメーションのクリップ一覧を取得
        this.clips = this.anim.getClips();
        cc.log(this.clips);
        this.countMax =  this.clips.length - 1;

        // defaultで1個目が再生してるのでカウント+1する
        this.count ++;

        // タッチイベントを設定
        this.canvas.on(cc.Node.EventType.TOUCH_END, (e) => {

            cc.log("TOUCH_END");
            // cc.log(e);
            // cc.log(e.target);
            this.changeAnim();

        }, this.node)

    }

    start() {
        //
    }

    update(dt) {
        //
    }

    /**
     * change charactor animation clip
     */
    changeAnim() {

        // 一覧の中から次に再生するクリップ名を取得して再生＆ラベルに表示
        let clipName = this.clips[this.count].name;
        this.anim.play(clipName);
        this.label.string = clipName;
        
        this.count ++;
        if(this.count > this.countMax) {
            this.count = 0;
        }

    }

}
