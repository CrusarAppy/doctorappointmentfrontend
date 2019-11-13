import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,  
  TextInput,
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ImageBackground } from 'react-native'


export default class Exercise extends React.Component {
    // static navigationOptions = {
    //     title: 'Your Account Setting',       
    //     header:null
    //   };    
      render() {
        return (
            <ScrollView>
            <View style={styles.container}>  
              <Text style={[styles.text]}>Exercise</Text>              
                <Text>Fitness
Main article: Physical fitness
Individuals can increase fitness following increases in physical activity levels.[16] Increases in muscle size from resistance training is primarily determined by diet and testosterone.[17] This genetic variation in improvement from training is one of the key physiological differences between elite athletes and the larger population.[18][19] Studies have shown that exercising in middle age leads to better physical ability later in life.[20]

Early motor skills and development have also shown to be related to physical activity and performance later in life. Children who have more proficient motor skills early on are more inclined to being physically active, and thus tend to perform well in sports and have better fitness levels. Early motor proficiency has a positive correlation to childhood physical activity and fitness levels, while less proficiency in motor skills results in a tendency to partake in a more sedentary lifestyle.[21]

A 2015 meta-analysis demonstrated that high-intensity interval training improved one's VO2 max more than lower intensity endurance training.[22]

Cardiovascular system
Main article: Cardiovascular fitness
The beneficial effect of exercise on the cardiovascular system is well documented. There is a direct correlation between physical inactivity and cardiovascular mortality, and physical inactivity is an independent risk factor for the development of coronary artery disease. Low levels of physical exercise increase the risk of cardiovascular diseases mortality.[23]

Children who participate in physical exercise experience greater loss of body fat and increased cardiovascular fitness.[24] Studies have shown that academic stress in youth increases the risk of cardiovascular disease in later years; however, these risks can be greatly decreased with regular physical exercise.[25] There is a dose-response relation between the amount of exercise performed from approximately 700–2000 kcal of energy expenditure per week and all-cause mortality and cardiovascular disease mortality in middle-aged and elderly men. The greatest potential for reduced mortality is in the sedentary who become moderately active. Studies have shown that since heart disease is the leading cause of death in women, regular exercise in aging women leads to healthier cardiovascular profiles. Most beneficial effects of physical activity on cardiovascular disease mortality can be attained through moderate-intensity activity (40–60% of maximal oxygen uptake, depending on age). Persons who modify their behavior after myocardial infarction to include regular exercise have improved rates of survival. Persons who remain sedentary have the highest risk for all-cause and cardiovascular disease mortality.[26] According to the American Heart Association, exercise reduces the risk of cardiovascular diseases, including heart attack and stroke.[23]

Immune system
Although there have been hundreds of studies on physical exercise and the immune system, there is little direct evidence on its connection to illness.[27] Epidemiological evidence suggests that moderate exercise has a beneficial effect on the human immune system; an effect which is modeled in a J curve. Moderate exercise has been associated with a 29% decreased incidence of upper respiratory tract infections (URTI), but studies of marathon runners found that their prolonged high-intensity exercise was associated with an increased risk of infection occurrence.[27] However, another study did not find the effect. Immune cell functions are impaired following acute sessions of prolonged, high-intensity exercise, and some studies have found that athletes are at a higher risk for infections. Studies have shown that strenuous stress for long durations, such as training for a marathon, can suppress the immune system by decreasing the concentration of lymphocytes.[28] The immune systems of athletes and nonathletes are generally similar. Athletes may have slightly elevated natural killer cell count and cytolytic action, but these are unlikely to be clinically significant.[27]

Vitamin C supplementation has been associated with lower incidence of upper respiratory tract infections in marathon runners.[27]

Biomarkers of inflammation such as C-reactive protein, which are associated with chronic diseases, are reduced in active individuals relative to sedentary individuals, and the positive effects of exercise may be due to its anti-inflammatory effects. In individuals with heart disease, exercise interventions lower blood levels of fibrinogen and C-reactive protein, an important cardiovascular risk marker.[29] The depression in the immune system following acute bouts of exercise may be one of the mechanisms for this anti-inflammatory effect.[27]

Cancer
A systematic review evaluated 45 studies that examined the relationship between physical activity and cancer survival rates. According to the review, "[there] was consistent evidence from 27 observational studies that physical activity is associated with reduced all-cause, breast cancer–specific, and colon cancer–specific mortality. There is currently insufficient evidence regarding the association between physical activity and mortality for survivors of other cancers."[30] Although there is only limited scientific evidence on the subject, people with cancer cachexia are encouraged to engage in physical exercise.[31] Due to various factors, some individuals with cancer cachexia have a limited capacity for physical exercise.[32][33] Compliance with prescribed exercise is low in individuals with cachexia and clinical trials of exercise in this population often suffer from high drop-out rates.[32][33]

Neurobiological
This section is transcluded from Neurobiological effects of physical exercise. (edit | history)
The neurobiological effects of physical exercise are numerous and involve a wide range of interrelated effects on brain structure, brain function, and cognition.[34][35][36][37] A large body of research in humans has demonstrated that consistent aerobic exercise (e.g., 30 minutes every day) induces persistent improvements in certain cognitive functions, healthy alterations in gene expression in the brain, and beneficial forms of neuroplasticity and behavioral plasticity; some of these long-term effects include: increased neuron growth, increased neurological activity (e.g., c-Fos and BDNF signaling), improved stress coping, enhanced cognitive control of behavior, improved declarative, spatial, and working memory, and structural and functional improvements in brain structures and pathways associated with cognitive control and memory.[34][35][36][37][38][39][40][41][42][43] The effects of exercise on cognition have important implications for improving academic performance in children and college students, improving adult productivity, preserving cognitive function in old age, preventing or treating certain neurological disorders, and improving overall quality of life.[34][44][45]

In healthy adults, aerobic exercise has been shown to induce transient effects on cognition after a single exercise session and persistent effects on cognition following regular exercise over the course of several months.[34][43][46] People who regularly perform aerobic exercise (e.g., running, jogging, brisk walking, swimming, and cycling) have greater scores on neuropsychological function and performance tests that measure certain cognitive functions, such as attentional control, inhibitory control, cognitive flexibility, working memory updating and capacity, declarative memory, spatial memory, and information processing speed.[34][38][40][42][43][46] The transient effects of exercise on cognition include improvements in most executive functions (e.g., attention, working memory, cognitive flexibility, inhibitory control, problem solving, and decision making) and information processing speed for a period of up to 2 hours after exercising.[46]

Aerobic exercise induces short- and long-term effects on mood and emotional states by promoting positive affect, inhibiting negative affect, and decreasing the biological response to acute psychological stress.[46] Over the short-term, aerobic exercise functions as both an antidepressant and euphoriant,[47][48][49][50] whereas consistent exercise produces general improvements in mood and self-esteem.[51][52]

Regular aerobic exercise improves symptoms associated with a variety of central nervous system disorders and may be used as an adjunct therapy for these disorders. There is clear evidence of exercise treatment efficacy for major depressive disorder and attention deficit hyperactivity disorder.[44][49][53][54][55][56] The American Academy of Neurology's clinical practice guideline for mild cognitive impairment indicates that clinicians should recommend regular exercise (two times per week) to individuals who have been diagnosed with this condition.[57] Reviews of clinical evidence also support the use of exercise as an adjunct therapy for certain neurodegenerative disorders, particularly Alzheimer’s disease and Parkinson's disease.[58][59][60][61][62][63] Regular exercise is also associated with a lower risk of developing neurodegenerative disorders.[61][64] A large body of preclinical evidence and emerging clinical evidence supports the use of exercise as an adjunct therapy for the treatment and prevention of drug addictions.[65][66][67][68][69] Regular exercise has also been proposed as an adjunct therapy for brain cancers.[70]

Depression
Part of this section is transcluded from Neurobiological effects of physical exercise. (edit | history)
A number of medical reviews have indicated that exercise has a marked and persistent antidepressant effect in humans,[38][49][50][53][71][72] an effect believed to be mediated through enhanced BDNF signaling in the brain.[41][53] Several systematic reviews have analyzed the potential for physical exercise in the treatment of depressive disorders. The 2013 Cochrane Collaboration review on physical exercise for depression noted that, based upon limited evidence, it is more effective than a control intervention and comparable to psychological or antidepressant drug therapies.[71] Three subsequent 2014 systematic reviews that included the Cochrane review in their analysis concluded with similar findings: one indicated that physical exercise is effective as an adjunct treatment (i.e., treatments that are used together) with antidepressant medication;[53] the other two indicated that physical exercise has marked antidepressant effects and recommended the inclusion of physical activity as an adjunct treatment for mild–moderate depression and mental illness in general.[49][50] One systematic review noted that yoga may be effective in alleviating symptoms of prenatal depression.[73] Another review asserted that evidence from clinical trials supports the efficacy of physical exercise as a treatment for depression over a 2–4 month period.[38]

A 2015 review of clinical evidence which included a medical guideline for the treatment of depression with exercise noted that the available evidence on the effectiveness of exercise therapy for depression suffers from some limitations;[54] nonetheless, it stated that there is clear evidence of efficacy for reducing symptoms of depression.[54] The review also noted that patient characteristics, the type of depressive disorder, and the nature of the exercise program all affect the antidepressant properties of exercise therapy.[54] A meta-analysis from July 2016 concluded that physical exercise improves overall quality of life in individuals with depression relative to controls.[44]

Continuous aerobic exercise can induce a transient state of euphoria, colloquially known as a "runner's high" in distance running or a "rower's high" in crew, through the increased biosynthesis of at least three euphoriant neurochemicals: anandamide (an endocannabinoid),[74] β-endorphin (an endogenous opioid),[75] and phenethylamine (a trace amine and amphetamine analog).[76][77][78].</Text>
            </View>
        </ScrollView>
        );
    }
}
Exercise.navigationOptions={  
    tabBarIcon:({tintColor, focused})=>(  
        <Icon name="running" size={30} color="#ffffff" />   
)  
}  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },    
    text: {
        color: '#177812',
        fontWeight: 'bold',
        fontSize: 50,
        justifyContent:'center',
        alignItems:'center' ,
        marginBottom:20       
        },
});