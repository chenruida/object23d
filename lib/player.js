class object2vrPlayer {
  //空热点
  emptyHotspot = {
    pan: 0,
    tilt: 0,
    title: "",
    url: "",
    target: "",
    id: "",
    skinid: "",
    w: 100,
    h: 20,
    wordwrap: !1,
    obj: null,
  };
  xmlBase = "";
  // xml 对象
  input = {
    columns: 1,
    rows: 1,
    states: 1,
    width: 100,
    height: 100,
    path: "images/",
    ext: "jpg",
    leveltileurl: "",
    leveltilesize: "",
    overlap: "",
    preload: !1,
  };
  //控制
  control = {
    simulatemass: !0,
    lockedmouse: !1,
    lockedkeyboard: !1,
    lockedwheel: !1,
    invertwheel: !1,
    speedwheel: 1,
    sensitifity: !1,
    sensitivity: !1,
    wrapx: !1,
    wrapy: !1,
    revx: !1,
    revy: !1,
    swapxy: !1,
    dblclickfullscreen: !1,
    automovemode: !1,
    controller: !1,
  };
  qthotspots = {
    reuse: 1,
    enabled: 0,
    qthotspot: {
      enabled: !1,
      width: 0,
      height: 0,
      textcolor: 0,
      background: !1,
      backgroundcolor: 0,
      border: 1,
      bordercolor: 1,
      borderradius: 1,
      wordwrap: !1,
    },
  };
  //热点外观
  hotspots = {
    mode: 1,
    f: 0,
    m: 0,
    ba: 0.05,
    bordercolor: 255,
    borderalpha: 1,
    backgroundcolor: 255,
    backgroundalpha: 0.3,
    view: {
      //启动
      enabled: !0,
      width: 180,
      height: 20,
      txt: "",
      img: "",
      //textcolor
      textcolor: 0,
      // textalpha
      textalpha: 1,
      background: !0,
      //backgroundcolor
      backgroundcolor: 16777215,
      //backgroundalpha
      backgroundalpha: 1,
      //bordercolor
      bordercolor: 0,
      //borderalpha
      borderalpha: 1,
      //borderradius
      borderradius: 3,
      //border
      border: 1,
      //wordwrap
      wordwrap: !0,
    },
  };
  hotspot = [];
  userdata = {
    title: "",
    description: "",
    author: "",
    datetime: "",
    copyright: "",
    source: "",
    information: "",
    comment: "",
  };
  //视图
  view = {
    row: 0,
    column: 0,
    g: 0,
    o: 0,
    state: 0,
    I: -1,
    J: -1,
    K: -1,
    defaultColumn: 0,
    defaultRow: 0,
    defaultSate: 0,
    ta: 1,
    viewer: {
      background: !0,
      backgroundcolor: 0,
      imagescaling: 1,
    },
    // ia: function () {
    //   return (f.I % f.c) + ((f.J % f.c) + (f.K % f.L) * f.j) * f.c;
    // },
    zoom: {
      min: 1,
      default: 1,
      Max: 1,
      centerX: 0,
      centerY: 0,
      isZoom: 1,
    },
  };
  autorotate = {
    start: !1,
    pingpong: 0,
    speed: 0,
    delay: 0,
    onlyonce: 0,
    stop: !1,
  };
  initStatu = !0;
  //初始构造
  constructor(ElementId) {
    this.div_name = ElementId;
    // this.hotspots = this.emptyHotspot;
    this.mouse = {
      x: 0,
      y: 0,
    };
    this.checkLoaded = [];
    this.isFullscreen = !1;
    this.divSkin = null;
    this.isLoaded = !1;
    this.hasConfig = !1;
    this.skinObj = null;
    this.xmlData = !1;
    this.userdata = {
      title: "",
      description: "",
      author: "",
      datetime: "",
      copyright: "",
      source: "",
      information: "",
      comment: "",
    };
    this.browser = {
      browserEngine: "",
      transition: "transition",
      basePath: "",
      ob: 0,
    };
    this.hotspot_div = null;
    this.windows = null;
  }
  //绘制 html element
  layerDiv = null;
  // F
  layer = null;
  layerAttribute = "";
  imgDiv = null;
  imguDiv = null;
  imgkaDiv = null;
  canvasTDiv = null;
  canvasx = null;
  divl = null;
  hotspotsDiv = null;
  canvas = null;

  //margin
  H = 0;
  I = 0;
  cb = 0;
  db = 0;
  layerWidth = 320;
  layerHeight = 480;

  createLayers(div_name) {
    this.windows = document.getElementById(div_name);
    let a = "";
    this.windows
      ? ((this.windows.innerHTML = ""),
        (this.layerDiv = document.createElement("div")),
        this.layerDiv.setAttribute(
          "style",
          "top:\t0px;left: 0px;-ms-touch-action: none;touch-action: none;position:relative;max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        this.windows.appendChild(this.b),
        (this.layer = document.createElement("div")),
        (a =
          "top:\t0px;left: 0px;overflow: hidden;position:absolute;-ms-touch-action: none;touch-action: none;" +
          (this.browser.browserEngine + "user-select: none;")),
        this.layer.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        this.layerDiv.appendChild(this.layer),
        (this.imgDiv = document.createElement("img")),
        this.imgDiv.setAttribute("galleryimg", "false"),
        (a =
          "top:\t0px;left: 0px;position:absolute;visibility: hidden;-ms-touch-action: none;touch-action: none;" +
          (this.browser.browserEngine + "user-select: none;")),
        this.imgDiv.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        this.layer.appendChild(this.imgDiv),
        (this.imguDiv = document.createElement("img")),
        this.imguDiv.setAttribute("galleryimg", "false"),
        (a =
          "top:\t0px;left: 0px;position:absolute;-ms-touch-action: none;touch-action: none;" +
          (this.browser.browserEngine + "user-select: none;")),
        this.imguDiv.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        this.layer.appendChild(this.imguDiv),
        (this.imgkaDiv = this.imguDiv),
        (this.canvasTDiv = document.createElement("canvas")),
        (a =
          "top:\t0px;left: 0px;width:  100px;height: 100px;visibility: hidden;position:absolute;-ms-touch-action: none;touch-action: none;" +
          (this.browser.browserEngine + "user-select: none;")),
        this.canvasTDiv.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        this.layer.appendChild(this.canvasTDiv),
        (this.canvasx = document.createElement("canvas")),
        (a =
          "top:\t0px;left: 0px;width:  100px;height: 100px;position:absolute;-ms-touch-action: none;touch-action: none;" +
          (this.browser.browserEngine + "user-select: none;")),
        this.canvasx.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        this.layer.appendChild(this.canvasx),
        (this.divl = document.createElement("div")),
        l.setAttribute(
          "style",
          "top:\t0px;left: 0px;position:absolute;padding: 3px;visibility: hidden;z-index: 1100;"
        ),
        (this.divl.innerHTML = " Hotspot text!"),
        this.layer.appendChild(this.divl),
        // hotspots
        (this.hotspotsDiv = document.createElement("div")),
        (a =
          "top:\t0px;left: 0px;width:  100px;height: 100px;overflow: hidden;position:absolute;z-index: 1000;" +
          (this.browser.browserEngine + "user-select: none;")),
        this.hotspotsDiv.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        this.layerDiv.appendChild(this.hotspotsDiv),
        (this.canvas = document.createElement("canvas")),
        (a =
          "top:\t0px;left: 0px;width:  100px;height: 100px;overflow: hidden;position:absolute;z-index: 900;" +
          (this.browser.browserEngine + "user-select: none;")),
        this.canvas.setAttribute(
          "style",
          a +
            "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;"
        ),
        this.layerDiv.appendChild(this.canvas),
        (this.divSkin = this.hotspotsDiv))
      : alert("container not found!");
  }

  detectBrowser() {
    /**
     *浏览器检测
     */
    const type = ["Webkit", "Moz", "O", "ms", "Ms"];
    for (let e = 0; e < type.length; e++) {
      "undefined" !==
        typeof document.documentElement.style[type[e] + "Transform"] &&
        ((this.browser.browserEngine = "-" + type[e].toLowerCase() + "-"),
        (this.browser.transition = type[e] + "Transition"));
    }
  }
  setBasePath(basePath) {
    this.browser.basePath = basePath;
  }

  //读取配置
  readConfigUrl(url) {
    /**
     * 下载xml文件
     */
    try {
      let xmlHttpRequest;
      window.XMLHttpRequest
        ? (xmlHttpRequest = new XMLHttpRequest())
        : (xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP"));
      xmlHttpRequest.open("GET", url, !1);
      xmlHttpRequest.send(null);
      let xmlData = xmlHttpRequest.responseXML;
      if (xmlData) {
        //base路径获取
        let fileName = url.lastIndexOf("/");
        0 <= fileName && (this.xmlBase = url.substr(0, fileName + 1));
        this.readConfigXml(xmlData);
      } else alert("Error loading XML");
    } catch (error) {
      alert("Error XML:" + error);
    }
  }

  //读取xml文件
  readConfigXml = function (xmlData) {
    let nodeXml = xmlData.firstChild;
    xmlData = nodeXml.firstChild;
    null == xmlData && (xmlData = nodeXml.nextSibling.firstChild);
    // 遍历读取xml
    for (let b; xmlData; ) {
      // view
      if ("view" == xmlData.nodeName)
        for (nodeXml = xmlData.firstChild; nodeXml; )
          "start" == nodeXml.nodeName &&
            ((b = nodeXml.getAttributeNode("column")),
            (this.view.defaultColumn = Number(b ? b.nodeValue : 0)),
            (this.view.column = this.view.defaultColumn),
            (b = nodeXml.getAttributeNode("row")),
            (this.view.defaultRow = Number(b ? b.nodeValue : 0)),
            (this.view.row = this.view.defaultRow),
            (b = nodeXml.getAttributeNode("state")),
            (this.view.defaultSate = Number(b ? b.nodeValue : 0)),
            (this.view.state = this.view.defaultSate)),
            "zoom" == nodeXml.nodeName &&
              ((b = nodeXml.getAttributeNode("min")),
              (this.view.zoom.zoomMin = 1 * (b ? b.nodeValue : 1)),
              (b = nodeXml.getAttributeNode("default")),
              (this.view.zoom.zoom = this.view.zoom.zoomDefault =
                1 * (b ? b.nodeValue : 1)),
              (b = nodeXml.getAttributeNode("max")),
              (this.view.zoom.zoomMax = 1 * (b ? b.nodeValue : 1)),
              (b = nodeXml.getAttributeNode("centerx")),
              (this.view.zoom.zoomCenterX = 1 * (b ? b.nodeValue : 0)),
              (b = nodeXml.getAttributeNode("centery")),
              (this.view.zoom.zoomCenterY = 1 * (b ? b.nodeValue : 0))),
            "viewer" == nodeXml.nodeName &&
              ((b = nodeXml.getAttributeNode("background")) &&
                (this.view.viewer.background = 1 == b.nodeValue),
              (b = nodeXml.getAttributeNode("backgroundcolor")) &&
                (this.view.viewer.backgroundcolor = 1 * b.nodeValue),
              (b = nodeXml.getAttributeNode("imagescaling")) &&
                (this.view.viewer.imagescaling = 1 * b.nodeValue)),
            (nodeXml = nodeXml.nextSibling);
      "autorotate" == xmlData.nodeName &&
        (this.initStatu && (this.autorotate.start = !1),
        (b = xmlData.getAttributeNode("start")) &&
          (this.autorotate.start = 1 == b.nodeValue),
        (b = xmlData.getAttributeNode("pingpong")) &&
          (this.autorotate.pingpong = 1 == b.nodeValue),
        (b = xmlData.getAttributeNode("speed")) &&
          (this.autorotate.speed = 1 * b.nodeValue),
        (b = xmlData.getAttributeNode("delay")) &&
          (this.autorotate.delay = 1 * b.nodeValue),
        (this.autorotate.stop = this.autorotate.satrt),
        (b = xmlData.getAttributeNode("onlyonce")) &&
          0 < b.nodeValue &&
          ((nodeXml = this.view.defaultColumn),
          (nodeXml =
            0 < this.autoroate.speed
              ? nodeXml + (b.nodeValue * this.input.columns + 0.5)
              : nodeXml - (b.nodeValue * this.input.columns + 0.5)),
          console.log("初始化视图")));
      //初始化视图
      // this.moveTo(
      //   nodeXml,
      //   this.view.defaultRow,
      //   0,
      //   Math.abs(this.autoroate.speed)
      // )));
      if ("input" == xmlData.nodeName) {
        if ((b = xmlData.getAttributeNode("columns")))
          this.input.columns = 1 * b.nodeValue;
        if ((b = xmlData.getAttributeNode("rows")))
          this.input.rows = 1 * b.nodeValue;
        if ((b = xmlData.getAttributeNode("states")))
          this.input.states = 1 * b.nodeValue;
        if ((b = xmlData.getAttributeNode("width")))
          this.input.width = 1 * b.nodeValue;
        if ((b = xmlData.getAttributeNode("height")))
          this.input.height = 1 * b.nodeValue;
        if ((b = xmlData.getAttributeNode("fileextension")))
          this.input.ext = b.nodeValue;
        if ((b = xmlData.getAttributeNode("imagepath")))
          this.input.path = b.nodeValue;
        if ((b = xmlData.getAttributeNode("leveltileurl")))
          this.input.leveltileurl = b.nodeValue;
        if ((b = xmlData.getAttributeNode("leveltilesize")))
          this.input.leveltilesize = Number(b.nodeValue);
        if ((b = xmlData.getAttributeNode("overlap")))
          this.input.overlap = b.nodeValue;
        if ((b = xmlData.getAttributeNode("preload")))
          this.input.preload = 1 == b.nodeValue;
        this.input.level = [];
        for (nodeXml = xmlData.firstChild; nodeXml; ) {
          if ("level" == nodeXml.nodeName) {
            let level = {};
            b = nodeXml.getAttributeNode("width");
            level.width = 1 * (b ? b.nodeValue : 1);
            b = nodeXml.getAttributeNode("height");
            level.height = 1 * (b ? b.nodeValue : 1);
            b = nodeXml.getAttributeNode("preload");
            level.cache = !1;
            b && (level.cache = 1 == b.nodeValue);
            level.M = Math.floor(
              (level.width + this.input.leveltilesize - 1) /
                this.input.leveltilesize
            );
            level.aa = Math.floor(
              (level.height + this.input.leveltilesize - 1) /
                this.input.leveltilesize
            );
            level.N = [];
            level.ha = [];
            this.input.level.push(level);
          }
          nodeXml = nodeXml.nextSibling;
        }
      }
      "control" == xmlData.nodeName &&
        this.initStatu &&
        ((b = xmlData.getAttributeNode("simulatemass")) &&
          (this.control.simulatemass = 1 == b.nodeValue),
        (b = xmlData.getAttributeNode("locked")) &&
          (this.control.lockedmouse = 1 == b.nodeValue),
        b && (this.control.lockedkeyboard = 1 == b.nodeValue),
        (b = xmlData.getAttributeNode("lockedmouse")) &&
          (this.control.lockedmouse = 1 == b.nodeValue),
        (b = xmlData.getAttributeNode("lockedkeyboard")) &&
          (this.control.lockedkeyboard = 1 == b.nodeValue),
        (b = xmlData.getAttributeNode("lockedwheel")) &&
          (this.control.lockedwheel = 1 == b.nodeValue),
        (b = xmlData.getAttributeNode("invertwheel")) &&
          (this.control.invertwheel = 1 == b.nodeValue),
        (b = xmlData.getAttributeNode("speedwheel")) &&
          (this.control.speedwheel = 1 * b.nodeValue),
        (b = xmlData.getAttributeNode("sensitifity")) &&
          (this.control.sensitifity = 1 * b.nodeValue),
        (b = xmlData.getAttributeNode("sensitivity")) &&
          (this.control.sensitivity = 1 * b.nodeValue),
        (b = xmlData.getAttributeNode("wrapx")) &&
          (this.control.wrapx = 1 == b.nodeValue),
        (b = xmlData.getAttributeNode("wrapy")) &&
          (this.control.wrapy = 1 == b.nodeValue),
        (b = xmlData.getAttributeNode("revx")) &&
          (this.control.revx = 1 == b.nodeValue),
        (b = xmlData.getAttributeNode("revy")) &&
          (this.control.revy = 1 == b.nodeValue),
        (b = xmlData.getAttributeNode("swapxy")) &&
          (this.control.swapxy = 1 == b.nodeValue),
        (b = xmlData.getAttributeNode("dblclickfullscreen")) &&
          (this.control.dblclickfullscreen = 1 == b.nodeValue),
        (b = xmlData.getAttributeNode("automovemode")) &&
          (this.control.automovemode = 1 == b.nodeValue),
        (b = xmlData.getAttributeNode("controller")) &&
          (this.control.controller = 1 * b.nodeValue));
      if ("qthotspots" == xmlData.nodeName) {
        if ((b = xmlData.getAttributeNode("reuse")))
          this.qthotspots.reuse = 1 * b.nodeValue;
        if ((b = xmlData.getAttributeNode("enabled")))
          this.qthotspots.enabled = 1 == b.nodeValue;
        this.qthotspots.qthotspots = [];
        let g = {
          id: 0,
          title: "",
          url: "",
          target: "",
        };
        this.qthotspots.qthotspots[g.id] = g;
        for (nodeXml = xmlData.firstChild; nodeXml; ) {
          if ("label" == nodeXml.nodeName) {
            if ((b = nodeXml.getAttributeNode("enabled")))
              this.qthotspots.qthotspot.enabled = 1 == b.nodeValue;
            if ((b = nodeXml.getAttributeNode("width")))
              this.qthotspots.qthotspot.width = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("height")))
              this.qthotspots.qthotspot.height = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("textcolor")))
              this.qthotspots.qthotspot.textcolor = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("background")))
              this.qthotspots.qthotspot.background = 1 == b.nodeValue;
            if ((b = nodeXml.getAttributeNode("backgroundcolor")))
              this.qthotspots.qthotspot.backgroundcolor = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("border")))
              this.qthotspots.qthotspot.border = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("bordercolor")))
              this.qthotspots.qthotspot.bordercolor = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("borderradius")))
              this.qthotspots.qthotspot.borderradius = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("wordwrap")))
              this.qthotspots.qthotspot.wordwrap = 1 == b.nodeValue;
          }
          "hotspot" == nodeXml.nodeName &&
            ((g = {}),
            (b = nodeXml.getAttributeNode("id")),
            (g.id = 1 * (b ? b.nodeValue : 1)),
            (b = nodeXml.getAttributeNode("title")),
            (g.title = b ? b.nodeValue.toString() : ""),
            (b = nodeXml.getAttributeNode("url")),
            (g.url = b ? b.nodeValue.toString() : ""),
            (b = nodeXml.getAttributeNode("target")),
            (g.target = b ? b.nodeValue.toString() : ""),
            (this.qthotspots.qthotspots[g.id] = g));
          nodeXml = nodeXml.nextSibling;
        }
      }
      // 热点style
      if ("hotspots" == xmlData.nodeName)
        for (nodeXml = xmlData.firstChild; nodeXml; ) {
          if ("label" == nodeXml.nodeName) {
            if ((b = nodeXml.getAttributeNode("enabled")))
              this.hotspots.view.enabled = 1 == b.nodeValue;
            if ((b = nodeXml.getAttributeNode("width")))
              this.hotspots.view.width = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("height")))
              this.hotspots.view.height = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("textcolor")))
              this.hotspots.view.U = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("textalpha")))
              this.hotspots.view.textalpha = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("background")))
              this.hotspots.view.background = 1 == b.nodeValue;
            if ((b = nodeXml.getAttributeNode("backgroundalpha")))
              this.hotspots.view.backgroundalpha = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("backgroundcolor")))
              this.hotspots.view.backgroundcolor = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("border")))
              this.hotspots.view.border = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("bordercolor")))
              this.hotspots.view.bordercolor = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("borderalpha")))
              this.hotspots.view.borderalpha = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("borderradius")))
              this.hotspots.view.borderradius = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("wordwrap")))
              this.hotspots.view.wordwrap = 1 == b.nodeValue;
          }
          if ("polystyle" == nodeXml.nodeName) {
            if ((b = nodeXml.getAttributeNode("mode")))
              this.hotspots.mode = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("bordercolor")))
              this.hotspots.bordercolor = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("backgroundcolor")))
              this.hotspots.backgroundcolor = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("borderalpha")))
              this.hotspots.borderalpha = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("backgroundalpha")))
              this.hotspots.backgroundalpha = 1 * b.nodeValue;
          }
          // 读取热点的值
          if ("hotspot" == nodeXml.nodeName) {
            let g = {
              //
              hstype: "point",
              pan: 0,
              tilt: 0,
              url: "",
              target: "",
              id: "",
              skinid: "",
              //width
              w: "",
              //height
              h: "",
              wordwrap: !1,
              obj: null,
              F: null,
              txt: "",
              img: "",
            };
            (b = nodeXml.getAttributeNode("url")) &&
              (g.url = b.nodeValue.toString());
            (b = nodeXml.getAttributeNode("contents")) &&
              (g.txt = b.nodeValue.toString());
            (b = nodeXml.getAttributeNode("img")) &&
              (g.img = b.nodeValue.toString());
            (b = nodeXml.getAttributeNode("target")) &&
              (g.target = b.nodeValue.toString());
            (b = nodeXml.getAttributeNode("title")) &&
              (g.title = b.nodeValue.toString());
            (b = nodeXml.getAttributeNode("id")) &&
              (g.id = b.nodeValue.toString());
            if ((b = nodeXml.getAttributeNode("reuse"))) g.reuse = b.nodeValue;
            (b = nodeXml.getAttributeNode("skinid")) &&
              (g.skinid = b.nodeValue.toString());
            (b = nodeXml.getAttributeNode("width")) &&
              (g.w = b.nodeValue.toString());
            (b = nodeXml.getAttributeNode("height")) &&
              (g.h = b.nodeValue.toString());
            (b = xmlData.getAttributeNode("wordwrap")) &&
              (g.wordwrap = 1 == b.nodeValue);
            g.locations = [];
            for (let l = nodeXml.firstChild; l; ) {
              if ("location" == l.nodeName) {
                // 热点位置
                let m = {
                  column: 0,
                  row: 0,
                  state: 0,
                  x: 0,
                  y: 0,
                };
                (b = l.getAttributeNode("column")) &&
                  (m.column = Number(b.nodeValue));
                (b = l.getAttributeNode("row")) &&
                  (m.row = Number(b.nodeValue));
                (b = l.getAttributeNode("state")) &&
                  (m.state = Number(b.nodeValue));
                (b = l.getAttributeNode("x")) && (m.x = Number(b.nodeValue));
                (b = l.getAttributeNode("y")) && (m.y = Number(b.nodeValue));
                g.locations.push(m);
              }
              l = l.nextSibling;
            }
            //添加到数组
            this.hotspot.push(g);
          }
          if ("polyhotspot" == nodeXml.nodeName) {
            let g = {
              hstype: "poly",
              url: "",
              target: "",
              id: "",
              skinid: "",
              reuse: 0,
              w: 100,
              h: 20,
              wordwrap: !1,
              obj: null,
              F: null,
              f: 0,
              m: 0,
            };
            (b = nodeXml.getAttributeNode("url")) &&
              (g.url = b.nodeValue.toString());
            (b = nodeXml.getAttributeNode("target")) &&
              (g.target = b.nodeValue.toString());
            (b = nodeXml.getAttributeNode("title")) &&
              (g.title = b.nodeValue.toString());
            (b = nodeXml.getAttributeNode("id")) &&
              (g.id = b.nodeValue.toString());
            if ((b = nodeXml.getAttributeNode("reuse"))) g.reuse = b.nodeValue;
            g.C = h.C;
            g.B = h.B;
            g.H = h.H;
            g.G = h.G;
            if ((b = nodeXml.getAttributeNode("bordercolor")))
              g.C = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("backgroundcolor")))
              g.B = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("borderalpha")))
              g.H = 1 * b.nodeValue;
            if ((b = nodeXml.getAttributeNode("backgroundalpha")))
              g.G = 1 * b.nodeValue;
            g.T = [];
            for (let l = nodeXml.firstChild; l; ) {
              if ("polygon" == l.nodeName) {
                let m = {
                  fa: 0,
                  ga: 0,
                  state: 0,
                  la: "",
                };
                if ((b = l.getAttributeNode("vertices"))) {
                  m.la = b.nodeValue.toString();
                  b = m.la.split("|");
                  m.Y = [];
                  for (let q = 0; q < b.length; q++) {
                    let r = {},
                      p = b[q].split(";");
                    r.F = [];
                    for (let t = 0; t < p.length; t++) {
                      let u = p[t].split(","),
                        x = {};
                      x.x = 1 * u[0];
                      x.y = 1 * u[1];
                      r.F.push(x);
                    }
                    m.Y.push(r);
                  }
                }
                if ((b = l.getAttributeNode("column"))) m.fa = b.nodeValue;
                if ((b = l.getAttributeNode("row"))) m.ga = b.nodeValue;
                if ((b = l.getAttributeNode("state"))) m.state = b.nodeValue;
                g.T.push(m);
              }
              l = l.nextSibling;
            }
            this.hotspot.push(g);
          }
          nodeXml = nodeXml.nextSibling;
        }
      // 用户信息
      "userdata" == xmlData.nodeName &&
        ((b = xmlData.getAttributeNode("title")),
        (this.userdata.title = b ? b.nodeValue.toString() : ""),
        (b = xmlData.getAttributeNode("description")),
        (this.userdata.description = b ? b.nodeValue.toString() : ""),
        (b = xmlData.getAttributeNode("author")),
        (this.userdata.author = b ? b.nodeValue.toString() : ""),
        (b = xmlData.getAttributeNode("datetime")),
        (this.userdata.datetime = b ? b.nodeValue.toString() : ""),
        (b = xmlData.getAttributeNode("copyright")),
        (this.userdata.copyright = b ? b.nodeValue.toString() : ""),
        (b = xmlData.getAttributeNode("source")),
        (this.userdata.source = b ? b.nodeValue.toString() : ""),
        (b = xmlData.getAttributeNode("info")),
        (this.userdata.information = b ? b.nodeValue.toString() : ""),
        (b = xmlData.getAttributeNode("comment")),
        (this.userdata.comment = b ? b.nodeValue.toString() : ""));
      xmlData = xmlData.nextSibling;
    }
    console.log(this);
    this.insertHotSpot();
    this.xmlData = !0;
    this.initStatu &&
      this.divSkin &&
      this.divSkin.ggViewerInit &&
      this.divSkin.ggViewerInit();
    this.initStatu = !1;
    this.hasConfig = !0;
    this.initViewer();
    this.view.viewer.background
      ? (this.layer.style.backgroundColor = colorChange(
          this.view.viewer.backgroundColor
        ))
      : (this.layer.style.backgroundColor = "transparent");
    // c.preloadImages()
  };
  insertHotSpot() {
    for (let a = 0; a < this.hotspot.length; a++)
      if (
        "point" == this.hotspot[a].hstype &&
        ((this.hotspot[a].obj =
          this.skinObj && this.skinObj.addSkinHotspot
            ? new this.skinObj.addSkinHotspot(this.hotspot[a])
            : new yc(this, this.hotspot[a])),
        this.hotspot[a].obj && this.hotspot[a].obj.__div)
      ) {
        let e = this.hotspot_div.firstChild;
        e
          ? this.hotspot_div.insertBefore(this.hotspot[a].obj.__div, e)
          : this.hotspot_div.appendChild(this.hotspot[a].obj.__div);
      }
  }
  initViewer() {
    this.setViewSize(this.windows.offsetWidth, this.windows.offsetHeight);
  }
  setViewSize(windth, height) {
    this.isFullscreen &&
      ("number" == typeof window.innerWidth
        ? ((windth = window.innerWidth), (height = window.innerHeight))
        : document.documentElement &&
          (document.documentElement.clientWidth ||
            document.documentElement.clientHeight)
        ? ((windth = document.documentElement.clientWidth),
          (height = document.documentElement.clientHeight))
        : document.body &&
          (document.body.clientWidth || document.body.clientHeight) &&
          ((windth = document.body.clientWidth),
          (height = document.body.clientHeight)));
    let b = windth - H - cb,
      f = height - I - db;
    this.layerWidth = b;
    this.layerHeight = f;
    this.layer.style.width = b + "px";
    this.layer.style.height = f + "px";
    this.layer.style.left = H + "px";
    this.layer.style.top = I + "px";
    ec();
    P.style.width = a + "px";
    P.style.height = e + "px";
    c.s.style.width = a + "px";
    c.s.style.height = e + "px";
    c.s.width = a;
    c.s.height = e;
    c.s.style.left = H + "px";
    c.s.style.top = I + "px";
    x.style.width = a + "px";
    x.style.height = e + "px";
    T.style.width = a + "px";
    T.style.height = e + "px";
    if (lc) {
      if (!ca)
        try {
          (qa = T.getContext("2d")), (O = ca = x.getContext("2d"));
        } catch (y) {}
      try {
        ca
          ? (this.layer.removeChild(M), this.layer.removeChild(u))
          : (this.layer.removeChild(x), this.layer.removeChild(T));
      } catch (y) {}
      lc = !1;
    }
    ca &&
      ((b = window.devicePixelRatio || 1),
      x.width != Math.round(a * b) || x.height != Math.round(e * b)) &&
      ((x.width = Math.round(a * b)),
      (x.height = Math.round(e * b)),
      (T.width = Math.round(a * b)),
      (T.height = Math.round(e * b)),
      ca.scale(b, b),
      qa.scale(b, b),
      (c.a = !0),
      (c.O = !0));
    c.a = !0;
    c.divSkin && c.divSkin.ggUpdateSize && c.divSkin.ggUpdateSize(a, e);
  }
}
