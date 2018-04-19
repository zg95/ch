/**
 * Created by Administrator on 2018-04-11.
 */
(function ($) {
    var App = function () {
        var answer = function () {
            var topicarr = [["1、合金结构钢的强度等级是根据（）划分的。"],["2、关于长距离输电线路铁塔基础设施测量的说法，正确的是（）"],["3、起重吊装采用2个以下吊点起吊时，下列吊索与水平线夹角，宜选用的角度是（）"],["4、下列焊接方法中，焊接飞溅最大的焊接方法是（）"],["5、若无设计规定，一般负压锅炉的风压试验压力是（）"],["6、下列静置设备设计压力值（P）的范围中，正确的是（）"],["7、温度取源部件安装在合金管道拐弯处时，错误的是（）"],["8、关于管道保温层施工的做法，错误的是（）"],["9、在耐火陶瓷纤维内衬上施工不定形耐火材料时，其表面应做（）"],["10、关于建筑管道工程系统试验的说法，正确的是（）"],["11.埋地的排水管道在隐蔽前必须做灌水试验，而非使用前做灌水试验。"],["12、下列子分部工程中，不属于液压电梯安装工程的是（）"],["13、投标人的下列情况，不应作为废标处理的是（）"],["14、施工合同中有关合同价款的分析内容，除合同价格和计价方法外，还应包括（）"],["15、降低机电工程项目成本的合同措施不包括（）"],["16、工程竣工结算的编制依据不包括（）"],["17、下列计量器具中，不属于A类器具的是（）"],["18、下列容器中，属于Ⅱ类压力容器的是（）"],["19、经过返修加固处理的分项工程，外形尺寸增大仍能满足安全使用要求的可以（）"],
                ["20、关于工程质量竣工验收中检查的说法，错误的是（）"],["21、关于机械设备垫铁设置的要求，正确的有（）"],["22、电缆上装设的标志牌，应注明的内容有（）"],["23、关于管道系统压力试验前应具备条件的说法，正确的有（）"],["24、下列防雷接地的分项工程，属于接闪器的有（）"],["25、关于通风与空调系统进行试运行与调试的说法，正确的有（）"],["26、关于安全技术防范系统的检测规定，正确的有（）"],["27、下列施工作业内容中，需要编制施工方案的有（）"],["28、在工程项目施工中，施工机具的选择要求有（）"],["29、关于工程竣工档案编制及移交的要求，正确的有（）"],["30、下列沟通协调内容中，属于施工资源配备协调的有（）"]]
            var optionsA = [["A.屈服强度"],["A.根据沿途实际情况测设铁塔基础"],["A.45°"],["A.气焊"],["A.0.4kPa"],["A、常压设备：P＜0.12MPa"],["A、在防腐、衬里、吹扫和压力试验前安装"],["A、采用预制块做保温层时，同层要错缝，异层要压缝"],["A、绝热处理"],["A、管道的压力试验应在无损检测前进行"],["A、政府办公楼"],["A、补偿装置安装"],["A、资产负债率大于招标要求"],["A、工期要求"],["A、建立成本管理责任体系"],["A、施工合同"],["A、直角尺检具"],["A、容积等于50m3的球形容器"],["A、降级验收"],["A、设计使用功能的分部工程应进行检验资料的复查"],["A、垫铁与设备基础之间的接触良好"],["A、线路编号"],["A、管道上的膨胀节已设置了临时约束装置"],["A、避雷针"],["A、设备单机试运转前进行口头完全技术交底"],["A、摄像机抽检的数量不应低于10%，且不应少于5台"],["A、大型设备吊装"],["A、满足施工方案的需要"],["A、项目竣工档案一般不少于两套"],["A、设备材料有序供应"]]
            var optionsB = [["B.抗拉强度"],["B.采用钢尺量距时的丈量长度适宜于80-10m"],["B.50°"],["B.手工电弧焊"],["B.0.5kPa"],["B、低压设备：0.12MPa≤P＜1.6MPa"],["B、用机械方法开孔"],["B、管道上的法兰等经常维修的部位，保温层必须采用可拆卸式的结构"],["B、防水处理"],["B、通球试验的球径不小于排水管径的2/3"],["B、城市轨道交通"],["B、悬挂装置安装"],["B、投标报价低于其个别成本"],["B、合同变更"],["B、选择适当的合同结构模式"],["B、政策性调价文件"],["B、千分表"],["B、容积等于5m3的低温液体储存容器"],["B、协商验收"],["B、分部工程验收时补充的见证抽样检验报告要复核"],["B、相邻两组垫铁间的距离，宜为500~1000mm"],["B、电缆编号"],["B、管道防腐及绝热工程已全部结束"],["B、避雷带"],["B、通风系统的联系试运行应不少于2h"],["B、探测器抽检的数量不应低于20%，且不应少于3台"],["B、支架制作安装"],["B、适合工程的具体特点"],["B、档案资料原件由建设单位保管"],["B、专业管线综合布置"]]
            var optionsC = [["C.抗压强度"],["C.一段架空线路的测量视距长度不宜超过400m"],["C.55°"],["C.CO2气体保护焊"],["C.0.6kPa"],["C、中压设备：1.6MPa≤P＜10MPa"],["C、逆着物料流向安装"],["C、水平管道的纵向接缝位置，要布置在管道垂直中心线45°的范围内"],["C、防火处理"],["C、高层建筑管道施工结束后应立即进行调整试验"],["C、2000㎡中学图书馆"],["C、导轨安装"],["C、投标安全文明施工费低于招标要求"],["C、索赔程序"],["C、必要的合同风险防控对策"],["C、设计变更技术核定单"],["C、立式光学计"],["C、低压管壳式余热锅炉"],["C、鉴定验收"],["C、安全检查是对设备安装工程最终质量的综合检验"],["C、设备底座有接缝处的两侧，各设置一组垫铁"],["C、电缆规格"],["C、符合压力试验要求的液体或气体已经备齐"],["C、均压环"],["C、空调系统带冷（热）源的连续运行运行应不少于8h"],["C、门禁器抽检的数量不应低于5%，且不应少于3台"],["C、压力管道焊接"],["C、保证施工质量的要求"],["C、应编制工程档案资料移交清单"],["C、施工垃圾分类堆放"]]
            var optionsD = [["D.抗弯强度"],["D.大跨越档距之间不宜采用解析法测量"],["D.60°"],["D.埋弧自动焊"],["D.1.0kPa"],["D、高压设备：10MPa≤P＜160MPa"],["D、取源部件轴线与管道轴线垂直相交"],["D、管托处的管道保湿，应不妨碍管道的膨胀位移"],["D、防腐处理"],["D、室内埋地排水管道投用前必须做灌水试验"],["D、6层住宅楼"],["D、对重（平衡重）安装"],["D、投标工期短于招标要求"],["D、价格补偿条件"],["D、全过程的合同控制"],["D、招标控制价清单"],["D、X射线探伤机"],["D、中亚搪玻璃容器"],["D、核算验收"],["D、参加验收的各方人员共同决定观感质量是否通过验收"],["D、厚的宜放在最下面，薄的宜放在最上面"],["D、起讫地点"],["D、试验方案已经过批准，并已进行安全交底"],["D、接地干线"],["D、系统总风量实测值与设计风量的偏差允许值不应大于10%"],["D、电子巡查信息识读器的数量少于3台时，应全部检测"],["D、设备试运行"],["D、小型设备超负荷运转"],["D、双方应在应缴清单上签字盖章"],["D、施工机具优化配置"]]
            var optionsE = [[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],[""],["E、每组垫铁块数不宜超过5块"],["E、使用年限"],["E、至少有1块在周检期内检验合格的压力表"],["E、引下线"],["E、空调冷（热）水总流量测试结果与设计流量的偏差不应大于10%"],["E、出入口识读器设备的数量少于10台时，应全部检测"],["E、灯具安装接线"],["E、兼顾市场拓展的需要"],["E、档案资料移交清单需一式三份"],["E、工程资金合理分配"]]
            var optionsF = [[["A"],[]],[["A"],["【解析】考查黑色金属材料。合金结构钢根据屈服强度划分，共有Q345、Q390、Q420、Q460、Q500、Q550、Q620等强度等级，教材P2."]],[["C"],["【解析】考查机电工程中常见的工程测量。选项A，长距离输电线路定位并检查后，可根据起、止点和转折点及沿途障碍物的实际情况，测设钢塔架基础中心桩，并非直接测设基础；选项B，当采用钢尺量距时，其丈量长度不宜大于80m。同时，不宜小于20m；选项D，大跨越档距测量。在大跨越档距之间，通常采用电磁波测距法或解析法测量。教材P20."]],[["D"],["【解析】考查钢丝绳和轻小型起重设备。若采用2个以上吊点起吊时，每点的吊索与水平线夹角不宜小于60°，教材P24."]],[["C"],["【解析】考查焊接工艺的选择。教材P30."]],[["B"],["【解析】考查锅炉系统主要设备的安装技术要求。P77。"]],[["C"],["解析：本题考查的是静置设备的分类。中压设备的范围：1.6MPa≤P＜10MPa；高压设备的范围：10MPa≤P＜100MPa，1.6MPa以下为常压设备，100MPa以上为超高压设备。参加教材P78"]],[["D"],["解析：本题考查的是自动化仪表取源部件的安装要求。选项D，温度取源部件与管道垂直安装时，取源部件轴线应与管道轴线垂直相交。参见教材P88"]],[["C"],["解析：本题考查的是绝热层施工技术要求。选项C，水平管道的纵向接缝位置，不得布置在管道垂直中心线45°范围内。参见教材P97。"]],[["B"],["解析：本题考查的事耐火陶瓷纤维施工技术。在耐火陶瓷纤维内衬上施工不定形耐火材料时，其表面应做防水处理。参见教材P106"]],[["B"],["解析：选项A，管道压力试验应在管道系统安装结束，经外观检查合格、管道固定牢固、无损检测和热处理合格、确保管道不再进行开孔、不再焊接作业的基础上进行；选项C，高层建筑管道应按分区、分段进行试验，合格后再按系统进行整体试验；选项D，室内隐蔽或埋地的排水管道在隐蔽前必须做灌水试验，而非使用前做灌水试验。"]],[["D"],["解析：本题考查的是消防工程验收的相关规定。选项A、B是属于特殊建筑工程的范围；选项C属于人员密集场所。参见教材P146-147"]],[["A"],["解析：本题考查的是电梯的组成。液压电梯安装子分部工程是由设备进场验收，土建交接检验，液压系统，导轨，门系统，轿厢，对重（平衡重），安全部件，悬挂装置，随行电缆，电气装置，整机安装验收等分项工程组成。参见教材P150"]],[["D"],["解析：本题考查的是机电工程招标的主要要求。下列情况应当作为废标处理：（1）弄虚作假，串通投标及行贿等违法行为；（2）报价低于其个别成本价；（3）投标人不具备资格条件或者投标文件不符合形势要求，如签字、盖章、标书密封等；（4）未能在实质上响应招标文件的投标书；（5）投标联合体未能提交共同投标协议等。参见教材P160"]],[["D"],["解析：本题考查的是施工分包合同的实施。合同价款分析应考虑的重点内容是合同价格，计价方法和价格补偿条件。参见教材P165"]],[["A"],["解析：降低项目成本的合同措施包括选用适当的合同结构模式、合同风险防控和过程的合同控制。参见教材P268-369"]],[["D"],["解析：本题考查的是工程竣工结算。工程竣工结算的依据：（1）该工程签订的具有法律效力的施工合同和补充文件。（2）已颁发的工程造价的政策性文件和相关规定。（3）按国家预算定额及相关取费标准结算的工程，则应根据施工图预算、设计变更技术核定单和现场用工签证。（4）实行招投标的工程以中标价为结算主要依据。参见教材P274"]],[["B"],["解析：本题考查的是施工现场计量器具的管理程序。施工企业最高计量标准器具和用于量值传递的工作计量器具。例如：一级平晶、零级刀口尺、水平仪检具、直角尺检具、百分尺检具、百分表检具、千分表检具、自准直仪、立式光学计、标准活塞式压力计等。列入国家强制检定目录的工作计量器具。例如，兆欧表、接地电阻测量仪、X射线探伤机等。参见教材P291"]],[["C"],["解析：本题考查的事锅炉、压力容器、压力管道的分类。属于Ⅱ类压力容器的有：中压容器；低压容器：极度和高度毒性介质的低压容器；易燃或中度毒性的低压反应容器和低压储存容器；低压管壳式余热锅炉；低压搪玻璃容器。参见教材P306"]],[["B"],["解析：本题考查的是工业安装工程质量验收评定为“不合格”时的处理办法。经返修或者加固处理的分项分部工程，虽然改变外形尺寸但仍能满足安全使用要求，可按技术方案和协商文件进行验收。参见教材P317"]],[["C"],["解析：本题考查的是单位（子单位）工程质量验收合格的规定。选项C，使用功能的检查是对建筑工程和设备安装工程最终质量的综合检验。也是用户最为关心的内容。参见教材P323"]],[["ABCE"],["解析：本题考查的是机械设备安装的一般要求。垫铁的设置应符合要求：（1）每组垫铁的面积符合现行国家标准《通用规范》的规定；（2）垫铁与设备基础之间的接触良好；（3）每个地脚螺栓旁边至少应有一组垫铁，并设置在靠近地脚螺栓和底座主要受力部位下方；（4）相邻两组垫铁间的距离，宜为500mm~1000mm；（5）设备底座有接缝处的两侧，各设置一组垫铁；（6）每组垫铁的块数不宜超过5块，防止平垫铁时，厚的宜放在下面，薄的宜放在中间，垫铁的厚度不宜小于2mm。参见教材P38"]],[["ABCD"],["解析：本题考查的是电力电缆线路的施工要求。标志牌上应注明线路编号、电缆型号、规格及起讫地点；并联使用的电缆应有顺序号。参见教材P55"]],[["ACD"],["解析：本题考查的是管道系统试验。选项B，试验范围内的管道安装工程在防腐、绝热之后；选项E，压力表不得少于两块。参见教材P63"]],[["ABC"],["解析：本题考查的是建筑电气工程组成。接闪器包括避雷针、避雷带、避雷网、均压环、避雷线。参见教材P115"]],[["BCDE"],["解析：本题考查的是通风与空调工程的施工程序。选项A，设备单机试运转安全保证措施要齐全、可靠，并有书面的安全技术交底。参见教材P126-127"]],[["BD"],["解析：本题考查的是建筑智能化系统检测技术。选项A、C抽检数量不应低于20%，且不少于3台；选项E，少于3台的时候全数抽检。参见教材P142"]],[["ACD"],["解析：本题考查的事编制主要施工方案。针对制约施工进度的关键工序和质量控制的重点分项工程，编制主要施工方案。例如，大型设备起重吊装方案、调试方案、重要焊接方案、设备试运行方案等。参见教材P175"]],[["ABCE"],["解析：本题考查的是施工机具的选择原则。施工机具选用的原则有：（1）施工机具的类型，应满足施工部署中的机械设备供应计划和施工方案的需要。（2）施工机具的主要性能参数，要能满足工程需要和保证质量要求。（3）施工机具的操作性能，要适合工程的具体特点和使用场所的环境条件。（4）能兼顾施工企业近几年的技术进步和市场拓展的需要。（5）尽可能选择操作上安全、简单、可靠，品牌优良且同类设备同一型号的产品。（6）综合考虑机械设备的选择特性。参见教材P185"]],[["ACD"],["解析：本题考查的是几点工程项目竣工档案管理要求。选项B，原件是由承建档案馆来保存的；选项E，档案资料移交清单一式两份。参见教材P197"]],[["ADE"],["解析：本题考查的是施工现场的沟通协调。施工生产资源配备的协调包括人力资源的合理配备；施工用设备和材料的有序供应；施工机具的优化配置；资金的合理分配等。参见教材P249"]]]
            var html = '';
            for (var i in topicarr ){
                var indexi = parseInt(i)+1
                html += '<div class="card_cont"><div class="card">'
                html += '<p class="question">'+topicarr[i]+'</p>'
                html += '<ul class="select">'
                if(indexi<=20){
                    html += '<li><input id="q'+indexi+'_1" type="radio" name="r-group-'+indexi+'" ><label for="q'+indexi+'_1">'+optionsA[i]+'</label></li>'
                    html += '<li><input id="q'+indexi+'_2" type="radio" name="r-group-'+indexi+'" ><label for="q'+indexi+'_2">'+optionsB[i]+'</label></li>'
                    html += '<li><input id="q'+indexi+'_3" type="radio" name="r-group-'+indexi+'" ><label for="q'+indexi+'_3">'+optionsC[i]+'</label></li>'
                    html += '<li><input id="q'+indexi+'_4" type="radio" name="r-group-'+indexi+'" ><label for="q'+indexi+'_4">'+optionsD[i]+'</label></li>'
                }else{
                    html += '<li><input  id="s'+indexi+'_1" type="checkbox" name="r-group-'+indexi+'" ><label class="multiple" for="s'+indexi+'_1">'+optionsA[i]+'</label></li>'
                    html += '<li><input  id="s'+indexi+'_2" type="checkbox" name="r-group-'+indexi+'" ><label class="multiple" for="s'+indexi+'_2">'+optionsB[i]+'</label></li>'
                    html += '<li><input  id="s'+indexi+'_3" type="checkbox" name="r-group-'+indexi+'" ><label class="multiple" for="s'+indexi+'_3">'+optionsC[i]+'</label></li>'
                    html += '<li><input  id="s'+indexi+'_4" type="checkbox" name="r-group-'+indexi+'" ><label class="multiple" for="s'+indexi+'_4">'+optionsD[i]+'</label></li>'
                }
                if(!optionsE[i][0]==" "){
                    html += '<li><input  id="s'+indexi+'_5" type="checkbox" name="r-group-'+indexi+'" ><label class="multiple" for="s'+indexi+'_5">'+optionsE[i]+'</label></li>'
                }
                if(indexi<=20){
                    html += '<div class="card_bottom"><span><b>'+indexi+'</b>/'+topicarr.length+'</span></div></ul>'
                }else{
                    html += '<div class="card_bottom"><a class="prev">提交</a><span><b>'+indexi+'</b>/'+topicarr.length+'</span></div></ul>'
                }

                html += '</div></div>'
            }
            // console.log(html)
            $("#answer").append(html);
            $.fn.answerSheet = function (options) {
                var defaults = {mold: 'card',};
                var opts = $.extend({}, defaults, options);
                return $(this).each(function () {
                    var obj = $(this).find('.card_cont');
                    var _length = obj.length, _b = _length - 1, _len = _length - 1, _cont = '.card_cont';
                    for (var a = 1; a <= _length; a++) {
                        obj.eq(_b).css({'z-index': a});
                        _b -= 1;
                    }
                    $(this).show();
                    if (opts.mold == 'card') {
                        obj.find('ul li label').click(function () {
                            // debugger;
                            var _idx = $(this).parents(_cont).index(), _cards = obj, _cardcont = $(this).parents(_cont);
                            if($(this).hasClass("multiple")){
                                return;
                            }else{
                                /*单选判断答案*/
                                var opt = $(this).parent().index();
                                var optionsopt = $(this).parents(".card_cont").index()
                                var reference = [["A"],["B"],["C"],["D"]]
                                var key = optionsF[optionsopt][0];
                                if(key.join()==reference[opt].join()){
                                    /*正确*/
                                    setTimeout(function () {
                                        _cardcont.addClass('cardn');
                                        setTimeout(function () {
                                            _cards.eq(_idx + 3).addClass('card3');
                                            _cards.eq(_idx + 2).removeClass('card3').addClass('card2');
                                            _cards.eq(_idx + 1).removeClass('card2').addClass('card1');
                                            _cardcont.removeClass('card1');
                                        }, 200);
                                    }, 100);
                                }
                                else{
                                    /*错误*/
                                    /*弹出正确答案*/
                                    // console.log( $(this).parents('.card').parent().index());

                                    var answer = optionsF[$(this).parents('.card').parent().index()][0];
                                    var resolve = optionsF[$(this).parents('.card').parent().index()][1];
                                    $(".error").find(".answer span").text(answer)
                                    $(".error").find(".resolve").text(resolve)
                                    $(".error").fadeIn("slow")
                                    return;
                                }

                                // if (_idx == _len) {
                                //     return;
                                // } else {
                                //
                                //     setTimeout(function () {
                                //         _cardcont.addClass('cardn');
                                //         setTimeout(function () {
                                //             _cards.eq(_idx + 3).addClass('card3');
                                //             _cards.eq(_idx + 2).removeClass('card3').addClass('card2');
                                //             _cards.eq(_idx + 1).removeClass('card2').addClass('card1');
                                //             _cardcont.removeClass('card1');
                                //         }, 200);
                                //     }, 100);
                                // }
                            }
                            // if (_idx == _len) {
                            //     return;
                            // } else {
                            //     setTimeout(function () {
                            //         _cardcont.addClass('cardn');
                            //         setTimeout(function () {
                            //             _cards.eq(_idx + 3).addClass('card3');
                            //             _cards.eq(_idx + 2).removeClass('card3').addClass('card2');
                            //             _cards.eq(_idx + 1).removeClass('card2').addClass('card1');
                            //             _cardcont.removeClass('card1');
                            //         }, 200);
                            //     }, 100);
                            // }
                        });
                        // $('.card_bottom').find('.prev').click(function () {
                        //     var _idx = $(this).parents(_cont).index(), _cardcont = $(this).parents(_cont);
                        //     obj.eq(_idx + 2).removeClass('card3').removeClass('cardn');
                        //     obj.eq(_idx + 1).removeClass('card2').removeClass('cardn').addClass('card3');
                        //     obj.eq(_idx).removeClass('card1').removeClass('cardn').addClass('card2');
                        //     setTimeout(function () {
                        //         obj.eq(_idx - 1).addClass('card1').removeClass('cardn');
                        //     }, 200);
                        // })
                        $('.card_bottom').find('.prev').click(function () {

                            var _idx = $(this).parents(_cont).index(), _cards = obj, _cardcont = $(this).parents(_cont);
                            /*所选多选题数组*/
                            var checkedArr = [];
                            _cardcont.find(".select li input").each(function () {
                                var checkedL;
                                if($(this).is(':checked')){
                                    var checkedL = $(this).parent().index()+1
                                    checkedArr.push(checkedL)
                                }

                            })
                            /*多选题判断*/
                            if (_idx == _len) {
                                return;
                            } else {
                                var checkedindex =$(this).parents(".card_bottom").parents(".card_cont").index()
                                // console.log(optionsF[checkedindex][0].join())
                                // console.log(checkedArr)
                                if(checkedArr.length>optionsF[checkedindex][0].join().length){
                                    /*选择答案大于正确答案 错*/
                                    var answer = optionsF[$(this).parents('.card').parent().index()][0];
                                    var resolve = optionsF[$(this).parents('.card').parent().index()][1];
                                    $(".error").find(".answer span").text(answer)
                                    $(".error").find(".resolve").text(resolve)
                                    $(".error").fadeIn("slow")
                                    return;
                                }else if(checkedArr.length == optionsF[checkedindex][0].join().length){
                                    /*选择答案等于正确答案 分情况讨论*/
                                    var x,reference = [["A"],["B"],["C"],["D"],["E"]],checkex=0;
                                    for(x in checkedArr){
                                        /*判断打对题的数量*/
                                        if(reference[checkedArr[x]-1]==optionsF[checkedindex][0].join().charAt(x)){
                                            console.log('答对了一题')
                                            checkex+=1;
                                            if(checkex==checkedArr.length ){
                                                /*正确*/
                                                setTimeout(function () {
                                                    _cardcont.addClass('cardn');
                                                    setTimeout(function () {
                                                        _cards.eq(_idx + 3).addClass('card3');
                                                        _cards.eq(_idx + 2).removeClass('card3').addClass('card2');
                                                        _cards.eq(_idx + 1).removeClass('card2').addClass('card1');
                                                        _cardcont.removeClass('card1');
                                                    }, 200);
                                                }, 100);
                                            }
                                        }else{
                                            /*答错*/
                                            var answer = optionsF[$(this).parents('.card').parent().index()][0];
                                            var resolve = optionsF[$(this).parents('.card').parent().index()][1];
                                            $(".error").find(".answer span").text(answer)
                                            $(".error").find(".resolve").text(resolve)
                                            $(".error").fadeIn("slow")
                                            return;
                                        }

                                    }
                                }else if(checkedArr.length < optionsF[checkedindex][0].join().length){
                                    /*选择答案小于正确答案 分情况讨论*/
                                    var x,reference = [["A"],["B"],["C"],["D"],["E"]],checkex=0,y,answerindex=0;
                                    for(x in checkedArr){
                                        /*判断打对题的数量*/
                                        for(y in optionsF[checkedindex][0].join()){
                                            if(reference[checkedArr[x]-1].join()==optionsF[checkedindex][0].join().charAt(y)){
                                                /*答对题个的数*/
                                                checkex+=1;
                                            }
                                        }
                                    }
                                    /*判断答对题的个数是否等于选的个数*/
                                    if(checkex == checkedArr.length){
                                        var answer = optionsF[$(this).parents('.card').parent().index()][0];
                                        var resolve = optionsF[$(this).parents('.card').parent().index()][1];
                                        $(".error-title").addClass("prompt").find("h1").text("可惜差一点");
                                        $(".error-buttom").addClass("prompt");
                                        $(".error").find(".answer span").text(answer)
                                        $(".error").find(".resolve").text(resolve)
                                        $(".error").fadeIn("slow")
                                        return;
                                    }else{
                                        /*答错*/
                                        var answer = optionsF[$(this).parents('.card').parent().index()][0];
                                        var resolve = optionsF[$(this).parents('.card').parent().index()][1];
                                        $(".error").find(".answer span").text(answer)
                                        $(".error").find(".resolve").text(resolve)
                                        $(".error").fadeIn("slow")
                                        return;
                                    }
                                }
                            }
                        })
                    }
                });
            };
            $(".error-buttom").on("click",function () {
                $(".error-title").removeClass("prompt").find("h1").text("抱歉,本题你答错了");
                $(".error-buttom").removeClass("prompt");
                $(this).parents(".error").fadeOut("slow");
            })

            $("#answer").answerSheet({});
        };

        return {
            init: function() {
                answer();
            },
        };
    }();
    jQuery(document).ready(function () {
        App.init();
    })
}(jQuery))