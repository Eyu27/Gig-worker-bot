const { Bot } = require('grammy');
const bot = new Bot('6385019964:AAEr0WR3PyVkUMwbXPAC4NPXkAiaIAtZeVg');

let profilePicture = null;
let fullName = "";
let gender = "";
let age = "";
let disability = "";
let city = "";
let subcity = "";
let woreda = "";
let village = "";
let phoneNumber = "";
let email = "";
let education = "";
let experience = "";
let experienceLevel = "";
let professionServices = [];

bot.command("start", async (ctx) => {
  fullName = "";
  gender = "";
  age = "";
  disability = "";
  city = "";
  subcity = "";
  woreda = "";
  village = "";
  phoneNumber = "";
  email = "";
  education = "";
  experience = "";
  experienceLevel = "";
  professionServices = [];

  await ctx.reply("Welcome, please provide your details:");
  await ctx.reply("Please send your profile picture:");
  
});

bot.command("help", async (ctx) => {
  await ctx.reply("ለበለጠ መረጃ  + (251) 907 000 111");
  await ctx.reply("+ (251) 908 000 222 ይደውሉልን:");
});

bot.command("about", async (ctx) => {
  await ctx.reply("Beten Ethiopia is a multi-faced online platform established to provide Up To date information on properties available in the market");
  //await ctx.reply("+ (251) 908 000 222 ይደውሉልን:");
});

bot.command("cancel", async (ctx) => {
  await ctx.reply("operation canceled");
  //await ctx.reply("+ (251) 908 000 222 ይደውሉልን:");
});

bot.on("message", async (ctx) => {
  const messageText = ctx.message.text;

  if (messageText === "/start") {
    await ctx.reply("Hi there! Please send your profile picture:");
  } else if (profilePicture === null && ctx.message.photo) {
    profilePicture = ctx.message.photo[ctx.message.photo.length - 1].file_id;
    await ctx.reply("Profile picture received. Please enter your full name:");
  } else if (profilePicture === null && ctx.message.text) {
    await ctx.reply("Invalid input. Please send your profile picture:");
  } else if (fullName === "") {
    fullName = messageText;
    await ctx.reply("Please select your gender:", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Male", callback_data: "gender_male" },
            { text: "Female", callback_data: "gender_female" },
          ],
        ],
      },
    });
  } else if (gender === "") {
    const callbackQueryData = ctx.callbackQuery.data;
    if (callbackQueryData.startsWith("gender_")) {
      gender = callbackQueryData.replace("gender_", "");
    }
    await ctx.reply("Please enter your age:");
  } else if (age === "") {
    if (!isNaN(messageText)) {
    age = messageText;
    await ctx.reply("Do you have any disabilities?", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Yes", callback_data: "disability_yes" },
            { text: "No", callback_data: "disability_no" },
          ],
        ],
      },
    });
    }else {
      await ctx.reply("Please enter your age as numbers only.");
    }
  } else if (disability === "") {
    const callbackQueryData = ctx.callbackQuery.data;
    if (callbackQueryData === "disability_yes") {
      disability = "Yes";
    } else if (callbackQueryData === "disability_no") {
      disability = "No";
    }
    await ctx.reply("Please select your city:", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Addis Ababa", callback_data: "city_addis_ababa" },
            { text: "Adama", callback_data: "city_adama" },
          ],
          [
            { text: "Bahirdar", callback_data: "city_bahirdar" },
            { text: "Hawassa", callback_data: "city_hawassa" },
          ],
        ],
      },
    });
  } else if (city === "") {
    const callbackQueryData = ctx.callbackQuery.data;
    if (callbackQueryData.startsWith("city_")) {
      city = callbackQueryData.replace("city_", "");
      if (city === "addis_ababa") {
        await ctx.reply("Please select your subcity:", {
          reply_markup: {
            inline_keyboard: [
              [
                { text: "Addis Ketema", callback_data: "subcity_addis_ketema" },
                { text: "Akaki Kality", callback_data: "subcity_akaki_kality" },
              ],
              [
                { text: "Arada", callback_data: "subcity_arada" },
                { text: "Bole", callback_data: "subcity_bole" },
              ],
              [
                { text: "Gullele", callback_data: "subcity_gullele" },
                { text: "Kirkos", callback_data: "subcity_kirkos" },
              ],
              [
                { text: "Kolefe Keranio", callback_data: "subcity_kolefe_keranio" },
                { text: "Lideta", callback_data: "subcity_lideta" },
              ],
              [
                { text: "Nifas Silk-Lafto", callback_data: "subcity_nifas_silk_lafto" },
                { text: "Yeka", callback_data: "subcity_yeka" },
              ],
              [
                { text: "Lemi Kura", callback_data: "subcity_lemi_kura" },
              ],
            ],
          },
        });
      } else {
        await ctx.reply("Please enter your subcity:");
      }
    }

  } else if (city === "") {
    const callbackQueryData = ctx.callbackQuery.data;
    if (callbackQueryData.startsWith("city_")) {
      city = callbackQueryData.replace("city_", "");
      if (city === "hawassa") {
        await ctx.reply("Please select your subcity:", {
          reply_markup: {
            inline_keyboard: [
              [
                { text: "Addis Ketema", callback_data: "subcity_addis_ketema" },
                { text: "Hayk Dar", callback_data: "subcity_hayk dar" },
              ],
              [
                { text: "Bahil Adarash", callback_data: "subcity_bahil adarash" },
                { text: "Misrak", callback_data: "subcity_misrak" },
              ],
              [
                { text: "Menahreya", callback_data: "subcity_menahreya" },
                { text: "Tabor", callback_data: "subcity_tabor" },
              ],
              [
                { text: "Mehal Ketema", callback_data: "subcity_mehal ketema" },
                { text: "Tula", callback_data: "subcity_tula" },
              ],
            ],
          },
        });
      } else {
        await ctx.reply("Please enter your subcity:");
      }
    }

 } else if (subcity === "") {
    subcity = messageText;
    await ctx.reply("Please enter your woreda:");
  } else if (woreda === "") {
    woreda = messageText;
    await ctx.reply("Please enter your village:");
  } else if (village === "") {
    village = messageText;
    await ctx.reply("Please share your phone number:", {
      reply_markup: {
        keyboard: [
          [{ text: "Share Contact", request_contact: true }],
          [{ text: "/cancel" }],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  } else if (phoneNumber === "") {
    if (ctx.message.contact) {
      phoneNumber = ctx.message.contact.phone_number;
      await ctx.reply("Do you have an email address?", {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Yes", callback_data: "email_yes" },
              { text: "No", callback_data: "email_no" },
            ],
          ],
        },
      });
    } else {
      await ctx.reply(
        "Please share your phone number using the 'Share Contact' button."
      );
      return;
    }
  } else if (email === "" && phoneNumber !== "" && messageText !== "") {
    if (messageText.toLowerCase() === "no") {
      email = "No email provided";
      await ctx.reply("Please enter your educational background:");
    } else {
      email = messageText;
      await ctx.reply("Please enter your educational background:");
    }
  } else if (education === "") {
    education = messageText;
    await ctx.reply("Please enter your experience:");
  } else if (experience === "") {
    experience = messageText;
    await ctx.reply("Please select your level of work experience:", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "More than 10 years", callback_data: "experience_more_than_10_years" },
            { text: "8-10 years", callback_data: "experience_8_to_10_years" },
          ],
          [
            { text: "5-8 years", callback_data: "experience_5_to_8_years" },
            { text: "2-5 years", callback_data: "experience_2_to_5_years" },
          ],
          [
            { text: "1-2 years", callback_data: "experience_1_to_2_years" },
            { text: "Less than 1 year", callback_data: "experience_less_than_1_year" },
          ],
        ],
      },
    });
  } else if (experienceLevel === "") {
    experienceLevel = messageText;
    const callbackQueryData = ctx.callbackQuery.data;
    if (callbackQueryData.startsWith("experience_")) {
      experienceLevel = callbackQueryData.replace("experience_", "");
    }
    await ctx.reply("Please select the profession services you offer:", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Electrician", callback_data: "profession_electrician" },
            { text: "Plumber", callback_data: "profession_plumber" },
            { text: "Carpenter", callback_data: "profession_carpenter" },
          ],
          [
            { text: "Sanitary Work", callback_data: "profession_sanitary_work" },
            { text: "Dish Technician", callback_data: "profession_dish_technician" },
            { text: "Ceramic Tiling", callback_data: "profession_ceramic_tiling" },
          ],
          [
            { text: "Gypsum", callback_data: "profession_gypsum" },
            { text: "Painter", callback_data: "profession_painter" },
            { text: "Construction", callback_data: "profession_construction" },
          ],
          [
            { text: "Metal", callback_data: "profession_metal" },
            { text: "Wood", callback_data: "profession_wood" },
            { text: "Interior", callback_data: "profession_interior" },
          ],
          [
            { text: "Aluminum", callback_data: "profession_aluminum" },
          ],
        ],
      },
    });
  
  } else {
    const callbackQueryData = ctx.callbackQuery.data;
    if (callbackQueryData.startsWith("profession_")) {
      const profession = callbackQueryData.replace("profession_", "");
      professionServices.push(profession);
      await ctx.editMessageText(
        `You have selected ${profession} as your profession service.`
      );
      await ctx.answerCallbackQuery();
      await ctx.reply("Do you want to select more profession services?", {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Yes", callback_data: "more_services_yes" },
              { text: "No", callback_data: "more_services_no" },
            ],
          ],
        },
      });
    } else if (callbackQueryData === "more_services_yes") {
      await ctx.editMessageText("Please select additional profession services:", {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Electrician", callback_data: "profession_electrician" },
              { text: "Plumber", callback_data: "profession_plumber" },
              { text: "Carpenter", callback_data: "profession_carpenter" },
            ],
            [
              { text: "Sanitary Work", callback_data: "profession_sanitary_work" },
              { text: "Dish Technician", callback_data: "profession_dish_technician" },
              { text: "Ceramic Tiling", callback_data: "profession_ceramic_tiling" },
            ],
            [
              { text: "Gypsum", callback_data: "profession_gypsum" },
              { text: "Painter", callback_data: "profession_painter" },
              { text: "Construction", callback_data: "profession_construction" },
            ],
            [
              { text: "Metal", callback_data: "profession_metal" },
              { text: "Wood", callback_data: "profession_wood" },
              { text: "Interior", callback_data: "profession_interior" },
            ],
            [
              { text: "Aluminum", callback_data: "profession_aluminum" },
            ],
          ],
        },
      });
    
    } else if (callbackQueryData === "more_services_no") {
      let userData = `Full Name: ${fullName}\nGender: ${gender}\nAge: ${age}\nDisability: ${disability}\nCity: ${city}\nSubcity: ${subcity}\nWoreda: ${woreda}\nVillage: ${village}\nPhone Number: ${phoneNumber}\nEducation: ${education}\nExperience: ${experience}\nExperience Level: ${experienceLevel}\nProfession Services: ${professionServices.join(", ")}`;
      if (email !== "" && email !== "No email provided") {
        userData += `\nEmail: ${email}`;
      } else {
        userData += `\nEmail: No email provided`;
      }
      await ctx.editMessageText(`Thank you for providing your details.\n\n${userData}`);
    } else if (callbackQueryData === "email_yes") {
      await ctx.reply("Please enter your email:");
    } else if (callbackQueryData === "email_no" && phoneNumber !== "") {
      email = "No email provided";
      await ctx.reply("Please enter your educational background:");
    } else if (callbackQueryData.startsWith("subcity_")) {
      subcity = callbackQueryData.replace("subcity_", "");
      await ctx.reply("Please enter your woreda:");
    }
  }
});

bot.on("callback_query", async (ctx) => {
  const callbackQueryData = ctx.callbackQuery.data;

  if (callbackQueryData.startsWith("gender_")) {
    gender = callbackQueryData.replace("gender_", "");
    await ctx.editMessageText("Please enter your age:");
  } else if (callbackQueryData === "disability_yes") {
    disability = "Yes";
    await ctx.reply("Please select your city:", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Addis Ababa", callback_data: "city_addis_ababa" },
            { text: "Adama", callback_data: "city_adama" },
          ],
          [
            { text: "Bahirdar", callback_data: "city_bahirdar" },
            { text: "Hawassa", callback_data: "city_hawassa" },
          ],
        ],
      },
    });
  } else if (callbackQueryData === "disability_no") {
    disability = "No";
    await ctx.reply("Please select your city:", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Addis Ababa", callback_data: "city_addis_ababa" },
            { text: "Adama", callback_data: "city_adama" },
          ],
          [
            { text: "Bahirdar", callback_data: "city_bahirdar" },
            { text: "Hawassa", callback_data: "city_hawassa" },
          ],
        ],
      },
    });
  } else if (callbackQueryData.startsWith("city_hawassa")) {
  city = "Hawassa";
  await ctx.reply("Please select your subcity:", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Addis Ketema", callback_data: "subcity_addis_ketema" },
          { text: "Hayk Dar", callback_data: "subcity_hayk dar" },
        ],
        [
          { text: "Bahil Adarash", callback_data: "subcity_bahil adarash" },
          { text: "Misrak", callback_data: "subcity_misrak" },
        ],
        [
          { text: "Menahreya", callback_data: "subcity_menahreya" },
          { text: "Tabor", callback_data: "subcity_tabor" },
        ],
        [
          { text: "Mehal Ketema", callback_data: "subcity_mehal ketema" },
          { text: "Tula", callback_data: "subcity_tula" },
        ],
      ],
    },
  });
}
        
else if (callbackQueryData.startsWith("subcity_addis_ketema")) {
  subcity = "Addis Ketema";
  await ctx.reply("Please enter your woreda:");
}
else if (callbackQueryData.startsWith("subcity_hayk dar")) {
  subcity = "Hayk Dar";
  await ctx.reply("Please enter your woreda:");
}
else if (callbackQueryData.startsWith("subcity_bahil adarash")) {
  subcity = "Bahil Adarash";
  await ctx.reply("Please enter your woreda:");
}
else if (callbackQueryData.startsWith("subcity_misrak")) {
  subcity = "Misrak";
  await ctx.reply("Please enter your woreda:");
}
else if (callbackQueryData.startsWith("subcity_menahreya")) {
  subcity = "Menahreya";
  await ctx.reply("Please enter your woreda:");
}
else if (callbackQueryData.startsWith("subcity_tabor")) {
  subcity = "Tabor";
  await ctx.reply("Please enter your woreda:");
}
else if (callbackQueryData.startsWith("subcity_mehal ketema")) {
  subcity = "Mehal Ketema";
  await ctx.reply("Please enter your woreda:");
}
else if (callbackQueryData.startsWith("subcity_tula")) {
  subcity = "Tula";
  await ctx.reply("Please enter your woreda:");
}

else if (callbackQueryData.startsWith("city_addis_ababa")) {
  city = "Addis Ababa";
  await ctx.reply("Please select your subcity:", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Addis Ketema", callback_data: "subcity_addis_ketema" },
          { text: "Akaki Kality", callback_data: "subcity_akaki_kality" },
        ],
        [
          { text: "Arada", callback_data: "subcity_arada" },
          { text: "Bole", callback_data: "subcity_bole" },
        ],
        [
          { text: "Gullele", callback_data: "subcity_gullele" },
          { text: "Kirkos", callback_data: "subcity_kirkos" },
        ],
        [
          { text: "Kolefe Keranio", callback_data: "subcity_kolefe_keranio" },
          { text: "Lideta", callback_data: "subcity_lideta" },
        ],
        [
          { text: "Nifas Silk-Lafto", callback_data: "subcity_nifas_silk_lafto" },
          { text: "Yeka", callback_data: "subcity_yeka" },
        ],
        [
          { text: "Lemi Kura", callback_data: "subcity_lemi_kura" },
        ],
      ],
    },
  });
}

else if (callbackQueryData.startsWith("subcity_addis_ketema")) {
  subcity = "Addis Ketema";
  await ctx.reply("Please enter your woreda:");
}
else if (callbackQueryData.startsWith("subcity_akaki_kality")) {
  subcity = "Akaki Kality";
  await ctx.reply("Please enter your woreda:");
}
else if (callbackQueryData.startsWith("subcity_arada")) {
  subcity = "Arada";
  await ctx.reply("Please enter your woreda:");
}
else if (callbackQueryData.startsWith("subcity_Bole")) {
  subcity = "Bole";
  await ctx.reply("Please enter your woreda:");
}
else if (callbackQueryData.startsWith("subcity_gullele")) {
  subcity = "Gullele";
  await ctx.reply("Please enter your woreda:");
}
else if (callbackQueryData.startsWith("subcity_kirkos")) {
  subcity = "Kirkos";
  await ctx.reply("Please enter your woreda:");
}
else if (callbackQueryData.startsWith("subcity_kolefe_keranio")) {
  subcity = "Kolefe Keranio";
  await ctx.reply("Please enter your woreda:");
}
else if (callbackQueryData.startsWith("subcity_lideta")) {
  subcity = "Lideta";
  await ctx.reply("Please enter your woreda:");
}
else if (callbackQueryData.startsWith("subcity_nifas_silk_lafto")) {
  subcity = "Nifas Silk-Lafto";
  await ctx.reply("Please enter your woreda:");
}
else if (callbackQueryData.startsWith("subcity_yeka")) {
  subcity = "Yeka";
  await ctx.reply("Please enter your woreda:");
}
else if (callbackQueryData.startsWith("subcity_lemi_kura")) {
  subcity = "Lemi Kura";
  await ctx.reply("Please enter your woreda:");
}

else if (callbackQueryData.startsWith("city_")) {
      city = callbackQueryData.replace("city_", "");
      await ctx.reply("Please enter your subcity:");
    } else if (callbackQueryData.startsWith("experience_")) {
      experienceLevel = callbackQueryData.replace("experience_", "");
      await ctx.reply("Please select the profession services you offer:", {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Electrician", callback_data: "profession_electrician" },
              { text: "Plumber", callback_data: "profession_plumber" },
              { text: "Carpenter", callback_data: "profession_carpenter" },
            ],
            [
              { text: "Sanitary Work", callback_data: "profession_sanitary_work" },
              { text: "Dish Technician", callback_data: "profession_dish_technician" },
              { text: "Ceramic Tiling", callback_data: "profession_ceramic_tiling" },
            ],
            [
              { text: "Gypsum", callback_data: "profession_gypsum" },
              { text: "Painter", callback_data: "profession_painter" },
              { text: "Construction", callback_data: "profession_construction" },
            ],
            [
              { text: "Metal", callback_data: "profession_metal" },
              { text: "Wood", callback_data: "profession_wood" },
              { text: "Interior", callback_data: "profession_interior" },
            ],
            [
              { text: "Aluminum", callback_data: "profession_aluminum" },
            ],
          ],
        },
      });
    } 
    
    if (callbackQueryData.startsWith("profession_")) {
      const profession = callbackQueryData.replace("profession_", "");
      professionServices.push(profession);
      await ctx.editMessageText(
        `You have selected ${profession} as your profession service.`
      );
      await ctx.answerCallbackQuery();
      await ctx.reply("Do you want to select more profession services?", {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Yes", callback_data: "more_services_yes" },
              { text: "No", callback_data: "more_services_no" },
            ],
          ],
        },
      });
    } else if (callbackQueryData === "more_services_yes") {
      const professionOptions = [
        { text: "Electrician", callback_data: "profession_electrician" },
        { text: "Plumber", callback_data: "profession_plumber" },
        { text: "Carpenter", callback_data: "profession_carpenter" },
        { text: "Sanitary Work", callback_data: "profession_sanitary_work" },
        { text: "Dish Technician", callback_data: "profession_dish_technician" },
        { text: "Ceramic Tiling", callback_data: "profession_ceramic_tiling" },
        { text: "Gypsum", callback_data: "profession_gypsum" },
        { text: "Painter", callback_data: "profession_painter" },
        { text: "Construction", callback_data: "profession_construction" },
        { text: "Metal", callback_data: "profession_metal" },
        { text: "Wood", callback_data: "profession_wood" },
        { text: "Interior", callback_data: "profession_interior" },
        { text: "Aluminum", callback_data: "profession_aluminum" },
      ];
  
      // Remove the selected profession services from the list of options
      professionServices.forEach((selectedProfession) => {
        const selectedProfessionIndex = professionOptions.findIndex((option) => option.text.toLowerCase() === selectedProfession);
        if (selectedProfessionIndex !== -1) {
          professionOptions.splice(selectedProfessionIndex, 1);
        }
      });
  
      await ctx.editMessageText("Please select additional profession services:", {
        reply_markup: {
          inline_keyboard: [
            professionOptions.slice(0, 3),
            professionOptions.slice(3, 6),
            professionOptions.slice(6, 9),
            professionOptions.slice(9, 12),
            professionOptions.slice(12, 14),
          
          ],
        },
      });
    } 
    
    else if (callbackQueryData === "more_services_no") {
      // Proceed with the collected data
      // You can perform further actions or store the data as needed
      let userData = `Full Name: ${fullName}\nGender: ${gender}\nAge: ${age}\nDisability: ${disability}\nCity: ${city}\nSubcity: ${subcity}\nWoreda: ${woreda}\nVillage: ${village}\nPhone Number: ${phoneNumber}\nEducation: ${education}\nExperience: ${experience}\nExperience Level: ${experienceLevel}\nProfession Services: ${professionServices.join(", ")}`;
      if (email !== "" && email !== "No email provided") {
        userData += `\nEmail: ${email}`;
      } else {
        userData += `\nEmail: No email provided`;
      }
      await ctx.editMessageText(`Thank you for providing your details.\n\n${userData}`);
    } else if (callbackQueryData === "email_yes") {
      await ctx.reply("Please enter your email:");
    } else if (callbackQueryData === "email_no" && phoneNumber !== "") {
      email = "No email provided";
      await ctx.reply("Please enter your educational background:");
    }
  });
  
  bot.start();
