const translate = (lang) => {
  let locale = i18n;
  if(!lang || lang === 'us' || lang === undefined || lang === null) {
    locale = i18n;
  } else if (lang === 'rs') {
    locale = i18n_rs;
  } else if (lang === 'br') {
    locale = i18n_br;
  } else if (lang === 'in') {
    locale = i18n_in;
  }

  $('#subButton').text(locale.subButton_text);
  $('#beta-text').text(locale.betaSign_label);
  $('#main-text').text(locale.mainText_text);
  $('#emailInput').attr('placeholder', locale.emailInput_placeholder);
  $('#invalid-email').text(locale.invalidEmail_label);
  $('#thank-you-note').text(locale.thankYou_label);
  $('#check-inbox-text').text(locale.checkInbox_label);
}

$('.rs').click(() => translate('rs'));
$('.us').click(() => translate('us'));
$('.br').click(() => translate('br'));
$('.in').click(() => translate('in'));

const i18n = {
  subButton_text: "Subscribe!",
  betaSign_label: "Now in public BETA!",
  mainText_text: "Get daily email digest of all basketball games played that day! With statistics of "
                   + "best performing players and interesting facts about played games!",
  emailInput_placeholder: "Enter email...",
  invalidEmail_label: "Invalid email!",
  thankYou_label: "Thank you for subscribing!",
  checkInbox_label: "Please check your inbox."
}

const i18n_rs = {
  subButton_text: "Prijavi se!",
  betaSign_label: "Pridruži se BETA verziji!",
  mainText_text: "Svakodnevni pregled svih mečeva koje se igraju tog dana! Sa statistikom najboljih "
                   + "igrača i zanimljivim informacijama o odigranim mečevima!",
  emailInput_placeholder: "Unesi email...",
  invalidEmail_label: "Neispravan email!",
  thankYou_label: "Hvala vam na prijavi!",
  checkInbox_label: "Proverite svoj inbox."
}

const i18n_br = {
  subButton_text: "Se inscrever!",
  betaSign_label: "Agora em público BETA!",
  mainText_text: "Receba diariamente um resumo por e-mail de todos os jogos de basquete disputados naquele dia! Com estatísticas de "
                   + "jogadores com melhor desempenho e fatos interessantes sobre jogos jogados!",
  emailInput_placeholder: "Introduzir email...",
  invalidEmail_label: "E-mail inválido!",
  thankYou_label: "Obrigado por se inscrever!",
  checkInbox_label: "Verifique sua caixa de entrada."
}

const i18n_in = {
  subButton_text: "सदस्यता लें!",
  betaSign_label: "अब सार्वजनिक बीटा में!",
  mainText_text: "उस दिन खेले जाने वाले सभी बास्केटबॉल खेलों के दैनिक ईमेल डाइजेस्ट प्राप्त करें! के आंकड़ों के साथ "
                   + "सर्वश्रेष्ठ प्रदर्शन करने वाले खिलाड़ी और खेले गए खेल के बारे में रोचक तथ्य!",
  emailInput_placeholder: "ईमेल दर्ज करें...",
  invalidEmail_label: "अवैध ईमेल!",
  thankYou_label: "सदस्यता लेने के लिए धन्यवाद!",
  checkInbox_label: "कृपया अपना इनबॉक्स जांचें।"
}
