(function(){
  const ibov={1994:10.5965,1995:-0.0126,1996:0.6376,1997:0.4484,1998:-0.3346,1999:1.5193,2000:-0.1072,2001:-0.1102,2002:-0.1701,2003:0.9733,2004:0.1781,2005:0.2771,2006:0.3293,2007:0.4365,2008:-0.4138,2009:0.8287,2010:0.0129,2011:-0.1811,2012:0.0763,2013:-0.1552,2014:-0.0286,2015:-0.1313,2016:0.3884,2017:0.2670,2018:0.1508,2019:0.3159,2020:0.0278,2021:-0.1183,2022:0.0434,2023:0.2269,2024:-0.1030};
  const cdi={1994:0.582,1995:0.536,1996:0.274,1997:0.243,1998:0.284,1999:0.250,2000:0.173,2001:0.174,2002:0.193,2003:0.231,2004:0.162,2005:0.191,2006:0.150,2007:0.117,2008:0.124,2009:0.098,2010:0.098,2011:0.118,2012:0.086,2013:0.082,2014:0.107,2015:0.131,2016:0.140,2017:0.099,2018:0.065,2019:0.060,2020:0.028,2021:0.049,2022:0.125,2023:0.131,2024:0.1065};
  const poup={1994:0.232,1995:0.227,1996:0.141,1997:0.108,1998:0.093,1999:0.083,2000:0.083,2001:0.083,2002:0.090,2003:0.116,2004:0.082,2005:0.097,2006:0.080,2007:0.077,2008:0.075,2009:0.070,2010:0.070,2011:0.075,2012:0.070,2013:0.062,2014:0.062,2015:0.081,2016:0.083,2017:0.068,2018:0.062,2019:0.049,2020:0.021,2021:0.024,2022:0.078,2023:0.079,2024:0.062};
  const val={1994:0.22,1995:0.15,1996:0.10,1997:0.09,1998:0.06,1999:0.08,2000:0.09,2001:0.09,2002:0.10,2003:0.12,2004:0.10,2005:0.09,2006:0.10,2007:0.12,2008:0.14,2009:0.2113,2010:0.2686,2011:0.2632,2012:0.1303,2013:0.1374,2014:0.0670,2015:0.0132,2016:0.0057,2017:-0.0053,2018:-0.0021,2019:0.000,2020:0.0367,2021:0.0529,2022:0.0616,2023:0.0513,2024:0.0773};
  const anos=[];for(let a=1994;a<=2024;a++)anos.push(a);
  const n=anos.length;
  function sim(m,ir,alug){const v=[100000];for(let i=1;i<n;i++){const a=anos[i],t=m[a]||0,p=v[i-1];let nv=p*(1+t);if(alug)nv+=p*0.055;if(ir)nv=p+(nv-p)*(1-ir);v.push(Math.round(nv));}return v;}
  function trek(){const v=[100000];for(let i=1;i<n;i++)v.push(Math.round(v[i-1]*1.30));return v;}
  const dI=sim(val,0,true),dB=sim(ibov,0,false),dC=sim(cdi,0,false),dD=sim(cdi,0.15,false),dP=sim(poup,0,false),dT=trek();
  function fmt(v){if(v>=1e9)return'R$'+(v/1e9).toFixed(1)+'B';if(v>=1e6)return'R$'+(v/1e6).toFixed(1)+'M';return'R$'+Math.round(v/1000)+'K';}
  document.getElementById('s-trek').textContent=fmt(dT[n-1]);
  document.getElementById('s-imovel').textContent=fmt(dI[n-1]);
  document.getElementById('s-bov').textContent=fmt(dB[n-1]);
  document.getElementById('s-cdi').textContent=fmt(dC[n-1]);
  document.getElementById('s-cdb').textContent=fmt(dD[n-1]);
  document.getElementById('s-poup').textContent=fmt(dP[n-1]);
  new Chart(document.getElementById('gcSite').getContext('2d'),{type:'line',data:{labels:anos,datasets:[
    {label:'Projeção metodologia',data:dT,borderColor:'#152543',borderWidth:2.5,borderDash:[8,4],pointRadius:0,pointHoverRadius:5,tension:0.1,fill:false,order:1},
    {label:'Imóvel (val.+aluguel)',data:dI,borderColor:'#b3975d',borderWidth:3,pointRadius:0,pointHoverRadius:5,tension:0.3,fill:false,order:2},
    {label:'Ibovespa',data:dB,borderColor:'#D85A30',borderWidth:1.5,borderDash:[5,4],pointRadius:0,pointHoverRadius:4,tension:0.15,fill:false,order:3},
    {label:'CDI bruto',data:dC,borderColor:'#378ADD',borderWidth:1.5,borderDash:[6,3],pointRadius:0,pointHoverRadius:4,tension:0.3,fill:false,order:4},
    {label:'CDB líq.',data:dD,borderColor:'#639922',borderWidth:1.5,borderDash:[3,3],pointRadius:0,pointHoverRadius:4,tension:0.3,fill:false,order:5},
    {label:'Poupança',data:dP,borderColor:'#B4B2A9',borderWidth:1.5,pointRadius:0,pointHoverRadius:3,tension:0.3,fill:false,order:6},
  ]},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},plugins:{legend:{display:false},tooltip:{backgroundColor:'rgba(21,37,67,.97)',titleColor:'#b3975d',bodyColor:'#fff',borderColor:'rgba(179,151,93,.4)',borderWidth:1,padding:16,titleFont:{size:15,weight:'700'},bodyFont:{size:14},callbacks:{label:c=>' '+c.dataset.label+': '+fmt(c.parsed.y)}}},scales:{x:{grid:{color:'rgba(128,128,128,.1)',drawTicks:false},ticks:{color:'#444',font:{size:14,weight:'600'},maxRotation:0,autoSkip:true,maxTicksLimit:10},border:{display:false}},y:{type:'logarithmic',grid:{color:'rgba(128,128,128,.1)',drawTicks:false},ticks:{color:'#444',font:{size:14,weight:'600'},callback:v=>[100000,200000,500000,1000000,2000000,5000000,10000000,50000000,100000000,500000000,2000000000].includes(v)?fmt(v):''},border:{display:false}}}}});
})();