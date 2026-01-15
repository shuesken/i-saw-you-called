export const dialogue = `


title:Start
---
<<declare $give_up = "break">>
<<declare $game1 = "Staircase">>
<<declare $dance = "notlikethat">>
<<declare $gettingready = "didntbringuptalking">>
<<declare $dancepartner = "noone">>
<<declare $pw = "winter">>
<<declare $clarence_when = "little">>
<<declare $lullaby = "moon">>
<<declare $stable = "well">>
<<declare $okok = "prettygood">>

Missed call…
->i saw you called?
<<if>>
I just wanted to check in because I haven't heard from you in a while. But we can just text if that’s easier
->I’m a bit underwater right now so texting's easier than calling
Haha
Work?
->mostly. Paperwork paperwork paperwork
I’m sorry
->yeah. thanks for checking in though
That's it?
->look I'm sorry my head's just in like 1000 places at once. I'll try to give you a call when I have a moment
OK, until then!
->talk soon 💞
<<pause 15 seconds>>
<<jump start2>>
===

title:start2
---
Try to make a game out of it!
->what?
the "paperwork paperwork paperwork" 😁
->what do you mean?
You know!
->sorry I'm just trying to concentrate on these forms I have to fill out
Like time yourself or make a colorful to-do list or give yourself a reward whenever you finish something
->I don’t have time for this. 
->honestly I can't be that annoyed, considering I already do 2 and 3
    I’m just trying to help
    ->I know, I thought it was funny
    But you were annoyed?
    ->no I mean that wasn’t supposed to be so serious
I don’t want to be a burden
->stop it
What?
->I was just teasing
It’s just
->don’t assume I think you’re a burden
OK
-> AAA insert voice message "Sprachi1" BBB
<<pause 2 minutes>>
<<jump start3>>
===

title:start3
---
OK
->ok?
What?
->I can’t tell if you’re annoyed now
hm
->help me out?
It just doesn’t sound very nice, me trying to trick you
->not nice of me or not nice of you?
What?
->Am I not being “very nice” by saying that you were tricking me or “tricking me” sounds like a “not very nice” thing to do?
Well both when you put it like that
->oh come on, everyone lies to their kids
!!
->you know what I mean!
I don’t!
->I don’t know, it’s like Santa or saying the dog went to live on a farm or something
Santa isn’t a LIE, it’s just playing pretend
->Catch me pulling hairs
?
->I didn’t mean “lie” like some terrible thing I just meant little fibs and tricks and pretend things
There’s a difference
->sure
You don’t think so?
->No no you’re right
It makes it sound so drastic, like I was manipulating you or something
->I know you hate that word
I give up
->gimme a break
    <<set $give_up to "break">>
->I'm sorry, but can we please drop it? I really need to focus here
    <<set $give_up to "drop">>
->oh my god are you serious? keep that self-pity shit to yourself
    <<set $give_up to "shit">>
Sure thing

<<send_game isyc_cleanup>>

->you know, I think we might have set a record there
What do you mean?
->it took us something like 60 messages to get fed up with each other
Haha
Would you look at that?
->right?
Though it looks more like it took us much less time to get fed up with each other, we just stuck it out longer than usual.
->true
Thank you for writing again.
->yeah I was just thinking about some of the non-chore games we used to play
Oh?
->because of course you didn't only make up games that involved errands
😛
->some real classics up there
Which ones?
->remember Staircase Avalanche?
    <<set $game1 to "Staircase">>
->remember Constellation Remix?
    <<set $game1 to "Constellation">>
->remember Drawing (in) Blanks?
    <<set $game1 to "Drawing">>
What a name!
->do you remember?
Honestly not really, but it sounds like a blast!
->haha you bet
Why is it so hard?
->what? To remember?
No
Just talking
Without pushing each others' buttons
->beep boop
?
->we know all the right combos to rile each other up I guess
High score
->and then it's like muscle memory
Mmhm
->haha exactly
I suppose
->hm
I wonder if it's the kind of thing that's easier actually talking
->I'm not so sure. It's not like we were super at peace with each other the last time I visited
I guess not.
->do you remember it differently?
->don’t you remember the whole hairdresser thing?
No, I mean of course I remember us fighting.
->yeah
But you were here for almost a week and it's not like all we did was fight
->no of course not
And I remember it being nice as well
->yeah no, me too
And I just think some things are easier to resolve face to face
->I guess, but I also think it makes other things worse
Like?
->idk just like emotions get hot really quick from the proximity or something
Hm, I wonder why that is
->I don't get It
?
->oh it sounded like you were being snarky
No I was actually wondering
->oh haha sorry
See I mean that's the kind of miscommunication that doesn't happen when you're actually talking to each other
->yeah sure
You don't agree?
-> AAA insert voice message "Sprachi2" BBB
<<pause 1 minutes>>
<<jump start4>>
===

title:start4
---
You just don't want to talk to me on the phone
->I have nothing against talking on the phone! or not more than anyone else of my generation lol
Sure.
->it's just hard to find the time and in-between conversations wouldn't be able to happen if we didn't also communicate by text
That's true.
Though you're almost never this talkative.
->come on
It's true!
->huh
Oh hold on I'm getting a phone call
->oh yeah no worries
something
something else
<<pause 6 minutes>>
even more
<<jump start5>>
===

title:start5
---
Hi
->hey, sorry, something came up here, I can't be on my phone much right now

<<if $give_up == "break">>
You got it!
<<elseif $give_up == "drop">>
Don't worry, I know the drill
->?
No no, it's fine, I get it
<<elseif $give_up == "shit">>
Ooookaaayy
->really?
Right, sorry, keeping my "self-pity shit" to myself 🤐
<<endif>>
<<pause 1 minutes>>
<<jump start6>>
===

title:start6
---
<<if $game1 == "Staircase">>
Staircase Avalanche, what a funny name. I'm just picturing snow pouring down from the Lees' upstairs.
<<elseif $game1 == "Constellation">>
Constellation Remix, what a funny name. I'm just picturing all the zodiac signs having a dance party.
<<elseif $game1 == "Drawing">>
Drawing (in) Blanks, what a funny name. Sounds something like Mad Libs mixed with Pictionary. Always mixing and matching and inventing!
<<endif>>
<<pause 20 minutes>>
<<jump spacedance>>
===


title:spacedance
---
<<send_image>>
Look, the school is doing the same theme you had when you were 16!
->oh wow haha
Quick response time!
->I’m on break
Oh good, you know breaks are important
->says you
Well you know, “do as I say, not as I do” or “did”
->no kidding
You’ll see
->huh?
Haha nevermind
->I was actually just thinking about our last conversation when you sent that
Oh yeah?
->yeah somehow thinking about those games we used to play jogged something loose in my memories
<<if $game1 == "Staircase">>
Oh right, Staircase Avalanche haha
<<elseif $game1 == "Constellation">>
Oh right, Constellation Remix haha
<<elseif $game1 == "Drawing">>
Oh right, Drawing Blanks haha
->Drawing (in) Blanks!
Oh of course, my bad!
<<endif>>
->haha
Do you remember that dance too? It was basically the same theme, right?
->I do, yeah, it was. that school is really frozen in time, huh?
We just need to know what the new version of the space age looks like!
->we?
Haha, they. I just talked to Rhina and got a little excited about it.
->you were excited then
The costumes and everything! Some would call it “annoyingly excited” 😜
->I don’t think I said it like that
    <<set $dance to "notlikethat">>
    Oh, but you did!
    ->I'm pretty sure I was excited too, at least a bit. I remember looking forward to doing costume and make-up with you for example
    I looked forward to that too.
    ->but you didn't show. you were asleep or distracted or something. not talking to me
    Oh, I didn't remember that part.
    ->I do
    I didn't mean to miss it. But it was a difficult time for me.
    ->I know
    But you still had a fun night, right?
    ->I don't really remember
        <<set $gettingready to "didntbringuptalking">>
        I think I remember you telling me about it.
        ->hm
    ->yeah
        <<set $gettingready to "didntbringuptalking">>
        I'm glad I didn't take away from that. But I guess at 17 your fun depends much more on your friends.
        ->sure, right
    ->I really wanted to talk to you that night
        <<set $gettingready to "broughtuptalking">>
        What about?
        ->can't you imagine?
        I mean many things come to mind.
        ->though in the end I was probably relieved I didn’t get the chance to bring it up
        I'm sorry I wasn't there.
        ->it was just a dance
->it was annoying.
    <<set $dance to "annoying">>
    <<set $gettingready to "broughtuptalking">>
    Come on. I can get excited about your dance.
    ->Sure
    Haha, have you still not forgiven me for my enthusiasm?
    ->I wanted to talk to you that night. We had plans. For before the dance.
    We did? I don't think I remember exactly how it went. You wore that silver suit?
    ->yeah. but I ended up putting it on alone. you were asleep or distracted or something.
    Sometimes I'm amazed by that memory of yours.
    ->it was important to me
    I'm sorry I missed it. I'm sure I really didn't want to. But it was a very busy time at work and I had to keep that up too.
    ->you weren't at work. you were just not talking to me, staring at the wall.
    What did you want to talk to me about?
    ->can't you imagine?
    I mean many things come to mind.
    ->in the end I was probably relieved I didn’t get the chance to bring it up
    I'm sorry i wasn't there.
    ->it was just a dance
Well, I'm sorry I brought up that memory for you.
->it's alright. it's not like i never think about that stuff anyways.
That stuff?
->you know. our stuff. your stuff.
You're being a little cryptic.
->nevermind
Did you dance with anyone that night?
->i don't think so
    <<set $dancepartner to "noone">>
    I was shy at that age too.
    ->I just didn't feel like I fit in.
    I guess you were special.
->my friends
    <<set $dancepartner to "friends">>
    That sounds nice!
    ->the loves of my young life.
    Haha!
->yeah
    <<set $dancepartner to "Jenna">>
    Who?
    ->Jenna
    I remember her. Why didn't you tell me?
    ->because you weren't easy to talk to that week
    That makes sense.

->god that feels so long ago 
I mean yeah, about half your life ago haha
->give or take
Give or take
->it’s crazy to me when I remember that you’re still in those places every day
I mean I don’t spend all my time hanging around your old high school
->hahaha no I would hope not
Can’t say the same about Rhina
->oh yeah, does she work there now?
Volunteers
->is that something you’d be interested in?
No
->ok sorry just asking
It’s fine 
Don’t worry, I keep plenty busy
->oh no I’m not trying to put any more on your plate I was just curious
Do you miss it? Or them, the places. Your old haunts.
->complicated question honestly
Makes sense I guess
->school was messy, especially high school. 
Lots to figure out at that age haha
->you don’t know the half of it
I probably don't 
->probably not
<<jump margret>>
===

title:margret
---
Speaking of old haunts! I was just driving down to Margret’s place (long story) and saw that they shut down the old town mall, you know, where we’d go for video rentals?
->no! you mean with the arcade?
Arcade?
->well when my school day ended earlier than when you got off work and everyone else was busy? 
Yeah?
->I’d wait in the arcade with whatever change I’d scraped together.
Oh right
->do you not remember that?
No, sure, but that must have just been a handful of times
->haha what? you're not being serious!
I don’t get it
->I mean I remember spending a lot of time there. And then we did that like every Saturday when we were helping out at Margret's. 
You’re kidding
->come on! it was like a treat for me, going there after Margret’s. Always figured the arcade was a bribe to get me to come along.
That’s ridiculous, you loved Margret!
->I mean
What?
->no I mean sure, she was like family
->no I mean sure, she was a friend
But?
->I don’t know. it’s not exactly like she was a people person, you know? or I guess like a kids person.
I guess she was a little eccentric, sure, but
hm
she really cared about you, you know
->I know I know! it’s just, I don’t know, it just felt so heavy whenever we were there. it was always so dark
What do you mean?
->it was like no light could get in there and whatever did got gobbled up by those thick curtains
Sweetie, I think you’ve got your memories mixed up! It could be a little stuffy sure, when we’d arrive, but I mean that’s why we were there to help, to clean up and air it out and do all the things she couldn’t anymore
->well yeah I know
I mean she could barely get around those first few months
->I know
it wasn’t easy for her, she hated not being able to get along by herself
->I know! I’m not saying I think it’s her fault or something
Of course I was just surprised to hear that you hated visiting her
->well that’s not really what I said. you knew that I didn’t love going there, it came up like every week
She didn’t have any thick curtains
->what?
I don’t think she had any curtains at all.
You must be confusing it with somewhere else though I don’t know what that might be. You’d know, you stood staring out her windows most of the time instead of helping me clean. Staring out at the back wall of the next building over. I thought it was kind of creepy the way you just stood there staring but Margret said to leave you be. She said you were special
she really liked having you there
->what did you say you were doing there?
What?
->you said you were going to Margret’s place “(long story)”
Oh that
the people that live there now found some of her old things and let the owner know, he still had my contact
->what did they find?
Just knicknacks really
->not that long of a story
?
->nevermind
<<send_game isyc_flipo>>
<<pause 7 minutes>> 
<<jump margret2>>
===

title:margret2
---
Can I call?
->can’t answer the phone right now. what’s up?
I am looking for the code for Photo Account and I can’t find it. “PA” – something. Didn’t you set that up?
->I guess so. don’t really remember.
It’s been a while since we looked at them together.
->yeah
I was looking for pictures of our trip to North Lake. Remember? We caught one of the best days that fall. Everything was all golden and you built that little hut from tree branches and twigs.
->I think it was your birthday.
No, it was fall, I’m sure!
->I meant the password.
Ah!
->So: PA1201
    <<set $pw to "winter">>
->So: PA2103
    <<set $pw to "spring">>
->So: PA0208
    <<set $pw to "summer">>
Thank you!
->Who did we go to North Lake with again? Was that Margret too? Before?
It was just the two of us.
->hm.
Margret wasn’t able to go on those kinds of trips anymore by then.
->what did Margaret mean when she said I was special?
What are you still doing up? You should be asleep!
->do you know the time difference by heart?
I do.
->and will you be sound asleep when it’s this time where you are
Well
->hahaha see?
My sleep schedule has gotten much better, thank you very much. You know that. I wish 15-years-ago-me wasn’t the most prominent version of me in your head.
->it’s not.
Well, I think sometimes you don’t really think of me as an evolving person.
->I do.
Yeah?
->yes
OK.
I don’t know exactly what she meant.
Margret, I mean
I guess sometimes you could be a little out of it. Just sort of somewhere else. Like just staring out the window at Margret’s. You were very communicative at times, but sometimes it just seemed like you were in a world of your own.
->but the way you put it before, her telling you to leave me be – it sounded like to her there was something nice about it too.
Yeah.
I think she felt a connection between the two of you.
->in what way?
I don’t know. I mean she was a little strange too 😂
->in what way?
Gosh it really is getting late where you are, aren’t you tired?
->...
I don’t really know, a unique individual. She used to be very social and was always the life of the party. But she was never with anyone for a longer period of time. And it seemed like she preferred it that way.
I know, I know, you’ll say that just meant she was cool and independent. But when she needed help, later, I was always worried if her “network” could make up for a real partner.
->why couldn’t you be her partner?
Haha yeah I mean in the end it did mostly come down to me to helping her
And you of course
->No, I meant that question seriously. 
What do you mean? We didn’t love each other that way. 
->I didn’t mean sexually.
->I didn’t mean romantically. 
->you didn’t?
Jesus. Where is this coming from?
->I just mean that you two really witnessed each other’s lives. She helped you out when you were starting out on your own. 
Sure. 
->You took care of her when she needed it. You told her things you told no one else. You don’t consider that partnership?
No, we were friends. That’s what friends do. I can’t imagine you wanted us to be a couple, considering you mostly tried to avoid spending time with her.
->I didn’t.
    ?
    ->I didn’t want you to be a couple, that’s not what I’m saying
->well, that would have made things very different, wouldn’t it?
    ?
    ->idk, it’s a whole other scenario. but that’s also not what i’m saying
So what are you saying?
-> AAA insert voice message "Sprachi3" BBB
<<pause 1 minutes>>
<<jump margret3>>
===

title:margret3
---
So everyone should just fuck all their friends?
->oh my god could you take anything I say in good faith? No, I’m not saying you should fuck all your friends.
OK
->I mean you do you, sometimes friends fuck. 
What exactly are we talking about?
->I just don’t think that being married or fucking need to be the defining elements of “partnership”
Margret was my friend, that’s good enough for me.
-> AAA insert voice message "Sprachi4" BBB
<<pause 2 minutes>>
<<jump margret4>>
===

title:margret4
---
Look I’m sorry I can’t keep up with your way of seeing things
->so maybe this “way of seeing things” is an example of me being “special” 
    I don’t think that’s what she meant.
    ->but maybe it is.
->or maybe you just don’t want to. 
    I really don’t know what this has to do with Margret. 
    ->I guess at Margret’s, unspoken stuff always felt super loud.
<<pause 4 hours>>
<<jump washedaway>>
===
title:washedaway
---
I’m sitting in my car and it’s raining and it made me think of the time we got stuck in the mountains and had to wait for it to pass because we couldn’t see anything outside.
->You’re not driving are you?
No I’m parked at the supermarket. I just got back in the car and wrote you.
->I was worried you were texting and driving.
Oh wow it’s really picking up, not sure I want to get on the road like this
We listened to that whole tape all the way through, remember? That beautiful choral music I don’t remember where it’s from, maybe Georgia? You said it was like the whole world was being washed away around us. It’s funny, I thought it was cute at the time, but just now when I was reminded of it it sounds a little scary, don’t you think?
->Sorry I’m at work, so I can’t respond right away.
That’s alright I hope you’re allowed to take breaks once in a while. The thunder and lightning right now is crazy.
<<send_game isyc_carride>>
<<pause 6 minutes>>
<<jump princess>>
===

title:princess
---
Wow, what a storm!
->You’re not still sitting in the car in the parking lot, are you?
No I drove home haha
Are you still living in the same place?
->haha which one?
Where I helped you with the bed, getting it set up.
->you’re joking.
What?
->is that the last time you visited me?
Oh no, right, I do remember you telling me how difficult it was to move that big old bed frame
->Twice.
You moved twice? Oh I guess it’s hard to keep track.
->you would have liked the room I had in between, it was small but cozy. I was only there for like a year though
And now?
->you’d complain about the cold
    What do you mean?
    ->no I meant it more as a joke, it’s just a little spare in comparison 
->you’d complain about the dust
    What do you mean?
    ->no I meant it more as a joke. there are a lot of empty surfaces. it’s just a little spare in comparison
To the place before
->and to my old room when I was a kid
Do you still have the bed?
->I did at first, but it didn’t really fit the space or the rest of my furniture. The paint was pretty chipped too
I could help you repaint it!
->no I mean I got rid of it pretty soon after I moved in here
It was a great find.
->that’s true, it was really cheap for how kind of grand it was
Like for a princess 😁
->yeah I guess. I mean they obviously didn’t need the money, if you remember where we went to pick it up.
It was so funny. Your first little place after leaving home, in that funny apartment, with that big princess bed. Your roommates must have wondered.
->yeah, right. It was fun for sleepovers.
->why would they care?
Wasn’t there that one game you played a lot with the princess locked away in the tower? Must have been at that arcade I guess.
->do you mean Mario?
I mean I thought it sounded a little old-fashioned, but you used to want to play it at home all the time, rescuing the princess from the dragon or whatever. I just thought it was funny you in that tiny room in that kind of rundown party flat with that big canopy bed like you were now the princess locked away.
->“rundown party flat” is a little harsh
Guarded by the loud techno dragon and surrounded by a moat of empty bottles haha
->well there’s no princess bed anymore, no princess. It’s just-a me, Mario.
It was a good way to keep you busy, I could send you on quests like “the dragon will let the princess go in exchange for twelve white stones” and off you’d go.
->good way to get rid of me, you mean
No, come on
->“The dragon is having a bad day and doesn’t want to play, go outside, look for rocks.” Bowser isn’t really a dragon, by the way.
You wanted to have quests to go on!
->kind of funny that I was searching for a princess back then.
Just needed to find a mirror haha
->can you stop calling me a princess?
    I thought that’s what you meant, because of the bed and all that!
    ->no, it’s not what I meant. Just that kids are so often gayer than they realize.
    I mean there probably weren’t any arcade games that involved rescuing a prince.
    ->would’ve been convenient for you for me to identify more with the captive one lol “stay in your room and wait to be rescued, maybe clean it up while you’re in there.”
->because that was my only option to see another gay kid?
   I thought that’s what you meant, because of the bed and all that!
   ->no, I meant it was probably nice to play a character who was in love with a woman.
   That seems like a stretch. I don't really think that kind of stuff is relevant at that age.
   ->you wouldn't know, would you?
Ok, I’m sorry I brought it up.
->you still do this, huh?
What?
->push and push and push and then act all surprised and hurt when I push back.
I’m not trying to be pushy
->what do you think you’re doing then?
I guess trying to connect with you over shared memories, which was what I thought you wanted
->what do you mean, “what I wanted”?
Nevermind
->?!
You got mad last time I brought it up
->what, “princess”? I’ve told you
No, look, I'm just surprised (pleasantly!) by how much we've been talking the last few days. I mean a pleasant surprise, not always pleasant haha. No, I'm just kidding. We talked about pushing each others' buttons and yes, we've been arguing as much as ever but I think I'd rather be arguing than not talking at all, if that makes sense. And it seemed to me to have to do with you sort of going down memory lane. A road we traveled together for quite some time. So you can't blame me for wanting to encourage that. You know, it sounds like you're homesick, so I'm happy to talk to you about home or what has been home or used to be. It's not like I'm always stuck in the past when I'm by myself.
->I mean I get what you're saying
But?
-> AAA insert voice message "Sprachi5" BBB
<<pause 1 minutes>>
<<jump princess2>>
===

title:princess2
---
What else?
->?
You said there were a couple of things
->oh yeah. hm. I don't know what I'm trying to find going back through all this old stuff. Just feels like I'm stuck on some knot
Ah.
->and it’s just tied around itself and if I pull it right it'll just open up but I don't really know where to pull at
So what's my role in this?
->come on, obviously you played like one of if not the biggest role in my life
Can't help notice the past tense.
->can we drop it? can we back up a little?
<<pause 2 minutes>>
<<jump princess3>>
===

title:princess3
---
OK.
Yes.
->thank you
So tell me about your new place. This new, cold castle of yours.
->ok Bowser
Haha is that Autocorrect for Boomer? Never thought I’d be called that
->hahahahahahah
Do you at least still have that little nightstand?
->“at least” 
Come on!
->yeah, I do, it’s not like I threw everything out from then
😮‍💨
No just joking, I was just curious.
->was that from Margret as well?
No, it was a gift.
->From whom?
Juno, an old friend.
->Did I ever meet them?
Maybe once or twice when you were little. We lost touch a long time ago.
->Oh, huh. I’m sorry.
Thank you. Why do you ask?
->You asked about it
Oh yeah, about the nightstand. Because we’d been talking about the bed.
->mmhm
Right.
->did it mean something special to you?
The nightstand?
->yeah
Why?
->my god you're making me work for it! Just cause it kind of came out of nowhere and you answered kind of curtly when they came up 
She
->and I'd never heard of them so I was curious if there was more to it
Or her. Juno.
->oh sorry. haha she/her
?
->nevermind 😉
Yes, she was special to me.
->in what way?
Just
special
->you're being a tease
I haven't thought about her in a little while
->oh I'm sorry to bring it up if it's painful
No no
Well
A little, I suppose.
->do you want to tell me about her?
Hm
Not at the moment?
Nothing terribly dramatic, just one of those things where it's hard to say exactly what happened and then years go by without contact and then you're reminded of it decades later and it's a bit overwhelming all at once
->damn that's a lot, I'm sorry
<<pause 10 minutes>>
<<jump princess4>>
===

title:princess4
---
Thanks
->kind of funny that came up in relation to the nightstand
How come?
-> AAA insert voice message "Sprachi6" BBB
<<pause 1 minutes>>
<<jump princess5>>
===

title:princess5
---
Like Proust and his madeleine?
->What?
Nevermind 😉
->did we have like a little game of leaving each other messages in there?
How do you mean?
->in the nightstand drawer
Messages?
->no it's just a feeling I had opening it up and suddenly expecting there to be something for me, a secret message or gift
Oh.
->and I got all giddy for a moment which was weird and kind of intense and then there were just some wadded up snotty tissues lol
Haha ew
->as if, I think we both know where I have that from
What??
->hahaha
I have no idea what you mean.
->did I know her?
Juno?
->yeah, I feel like I have a vague image
I suppose, but you were really little when you met her. Just once I think.
->still could be
<<pause 1 hours>>
<<jump clarence>>

===

title:clarence
---
Sure
->Oh weird
What?
->it’s probably just on my mind, but I just had a weird moment
What happened?
->I just went to the corner store
By the way did you see the pictures from Clarence’s wedding?
->and the sidewalk was really crowded and I just had kind of that same thing again like from the nightstand
Huh.
->oh uh yeah I did on Instagram
Like the madeleine?
->what the fuck is a madeleine?
Geez nevermind
They look so sweet together don’t they. And he got so handsome 😉
->what? Oh yeah, kind of kitschy but yeah
What do you mean?
->I don’t know a little over the top for me. 
Geez
->anyway, yeah it was just like when you walk by someone with the same perfume as someone you know except I couldn’t place it
Is it like a heterosexual thing?
->what?
Like having a problem with the wedding pictures because it was a little on the traditional side?
->oh. Kinda?
Isn’t that kind of petty?
->petty?
I don’t know nevermind
He just looks so happy
they both do
->yeah no definitely
You two used to be so close.
->I mean we haven’t talked in like over 12 years
I kind of always thought you might end up together.
->oh come on
You were so cute!
->stop
The way he used to look at you…
You even took baths together when you were little haha.
->please. drop it
OK, OK, I didn’t mean to offend you!
->I’m not offended I just don’t want to marry Clarence
Oh I didn’t mean that!
Haha, could you imagine
->come on
I wonder who…
->what?
Who you think you’re smelling haha
->Yeah I don’t know
What do they smell like?
->I don’t think it’s really like what the person smelled like, just moments of association because of a sense thing. I don’t know
Mysterious!
->🙄
It is!
->but yeah I didn’t even see who it was that I passed. It just, I don’t know, hit me weirdly hard
I wish I could help…
->it’s probably not actually anything
<<jump weird>>
===

title:weird
---
Maybe!
->did you know Clarence once called us weird?
He did?
->yeah
When?
->I don't know, we were little. Not like little little, but still kids
    <<set $clarence_when to "little">>
    Are you sure he didn't have a crush on you?
    ->look I know kids tease when they have crushes but he meant weird more like unsettling than like "different but what I mean is cute"
    Maybe he was just the age where finding a girl cute felt unsettling?
    ->Oh my god forget it
->In high school, sophomore year I think
    <<set $clarence_when to "high_school">>
    That stinker!
    ->haha
    Why?
    ->I don't know exactly, we were at our place just hanging around and he kind of blurted it out lol
    Were you getting stoned?
    ->don't remember
    mmhm
    ->ok yeah whatever we were, not like we had to be worried about you being around to stop us
I'm just teasing
->yeah yeah
Come on, you’re so sensitive sometimes!
->you're so insufferable sometimes!
Insufferable? Really?
->nevermind
You know I don't like to generalize, but your generation really does love the one-two punch of "you don't understand anything!" and "don't expect me to explain anything to you"
<<if $clarence_when == "little">>
->well then pay attention! obviously I'm not a huge fan of you projecting a boy meets girl hetero dream love story on him and me
OK sorry.
->or boy meets whatever
<<else>>
->look, I think you're the one being sensitive, given the way you clam up when I bring up your absence
I wasn’t absent. But at least you could smoke weed whenever you wanted
->oh my god you have to be kidding me
You think I didn't want to be there more? To spend more time with my little girl?
->can you please not call me that
?
->i give up. you’re not listening to me.
<<endif>>
OK OK, geez, I can't help it if the way I know and love you slips into the way I talk about you when you were younger
->I'm sorry but that makes no sense
I'm trying!
->to what? 
Explain? Understand? Open up?
->ok well what that just felt like was you putting a bandaid on a cut and then punching it
That's crazy
->just fucking bear with me
Can we not use examples that involve me hitting you?
->ok yeah sorry
->that’s what you’re focusing on?
...
->all I mean is your justification for doing something that kind of hurts me is in itself even more painful 
I wasn't justifying
->come on, I'm trying to stay in good faith here
OK can you elaborate?
-> AAA insert voice message "Sprachi7" BBB
    <<pause 1 minutes>>
    <<jump notagirl>>
-> AAA insert voice message "Sprachi8" BBB
    <<pause 1 minutes>>
    <<jump trytoshare>>
===

title:notagirl
---
Huh.
->and "once in a while" is being generous
But what do you want me to say?
->that's what I'm trying to say! it's not about saying the right thing, it's about knowing that you really know me.
And that I love you? Because you know I do!
->i don't know
Hey!
->no really, that's I think kind of the core of it – you say you know me and that you love me
I
->and I think those are connected, and so if I get the sense that you don't really know me, then well...
Hm
I think I need a little breather
<<send_game isyc_snake>>
<<jump weird2>>
===

title:trytoshare
---
That is not fair. 
->how is that not fair?
The windows you offer of you opening up are really small, you know? And if I don’t catch the right moment, they’re already closed. Every question I ask about it, every thought I contribute makes you so angry so quickly. 
->I don’t need your contributions on those kinds of things. 
I think you underestimate the ways in which I know you. 
->I think you overestimate them, if this is your response to me trying to bring something up with you. 
You are being stubborn. You don’t want to understand. 
->I think i need a little breather
Sure.
<<send_game isyc_snake>>
->You know, I think Clarence might have had a point haha
<<jump weird2>>
===

title:weird2
---
About?
->about us being weird
Hm I have to think about that.
->sorry, I was just trying to lighten things up
That's sweet 😊
But I mean it's a funny question
->I didn't mean it so seriously!
Do you think we were weird? Or are?
->I guess I'm not really sure what "weird" means or like, it's hard to judge your own weirdness
Right, but every family has its own idiosyncrasies, right?
->hm 
Like the Sewalds, how they were always nice but with this sort of esoteric distance that made it seem too nice?
->hahaha
You know what I mean?
->yeah no sure, I guess I'm not sure how much is sort of intrinsically tied to, like, blood relationships
Right, of course, you could just as easily say "household" instead of family. People living together in a place influencing each other and it.
->and being influenced by it
The home?
->yeah
I suppose so.
->yeah I mean definitely we had our quirks
I think so too.
->so i just kind of soaked up your weirdness?
Well not only
->?
You were always weird in your own ways too
->har har
And no one knows exactly where their own special weirdness comes from
->ok now you're starting to sound like Camila
Who?
->Sewald
Hey!
->no no, jk jk. But also, see how easy it is to use "they" in the singular without it suddenly being super confusing?
Oh come on
->what do you mean come on?
I never said that
->never said what?
That it's "super confusing," it's just something to get used to. When it's being used to refer to a specific person
->ah yes, old dogs and new tricks
You call me a dog again and see if you don't start growing a snout
->oh my god
What?
->definitely a weird household
->definitely a weird head of the house
Woof woof 
->Shlecky? Is that you?
Rrrrrrrr
->It's me! 
Be nice now, Shlecky, you know her! She smells different now, but she's changed less than she claims!
->it's me, Shlecky. Just me.
<<send_game isyc_diary>>
<<jump ghosts>>
===

title:ghosts
---
Right
->hey what was that song you used to sing when I was falling asleep?
Hi! Which one?
->hmm I have the melody at the tip of my tongue but don’t remember the words.
Oh, did you figure out who you were trying to think of?
->huh?
The person you smelled on the street??
->oh haha I thought you meant the song, I think it's about someone
Haha
->no idk, I think I'm just getting a little mixed up
Remembering?
->yeah
It's almost a little spooky haha
->what is?
It's like you're being haunted!
->~the ghosts of my life~
Haha exactly ~blew wilder than befoooore~
->It was the one you sang most often (besides "ghosts" of course lol)
Right.
->I’m pretty sure something something the moon?
    <<set $lullaby to "moon">>
    Oh Ms. Moon!
    ->Yes Ms. Moon!
    Ms. Moon, Ms. Moon I’ll see you soon
->I'm pretty sure something something the river?
    <<set $lullaby to "river">>
    Oh Sister River!
    ->Yes Sister River
    Oh, Sister River, sister of mine
->I'm pretty sure something something the night?
    <<set $lullaby to "night">>
    Oh Dear Night!
    ->Yes, Dear Night!
    Dear Night, dear Night

->right, thank you!
Anytime 😊
->another ghost haha
<<if $lullaby == "moon">>
Way up there in your hot air balloon
<<elseif $lullaby == "river">>
Flow by my garden, flowing so fine
<<elseif $lullaby == "night">>
You gave me such a frightning fright
<<endif>>
->a shared ghost
Ours?
->yeah, maybe that's what those household quirks were about
Ghosts?
->yeah, like whatever ghosts were haunting your home
I do think people play a role in that
->like if a ghost haunts a home with no one in it is it really haunting?
Don't you think?
->I didn't mean to get into this deep of a discussion about actual ghosts
I think it's still an interesting question
->yeah I mean, I think of course there was some kind of interchange between you and me and us and the place we lived
Right.
->all the memories and feelings and things. lots of material there
I mean, I imagine it gets even more complicated with big families
->you'd think
You don't?
->no I mean I bet it can get complicated, but I had a lot to keep me busy
I always thought there was something simple about our home
->simple??
I didn't say easy
->trust me, it was plenty confusing
I'm sorry
->I feel like you don't know what you're apologizing for
    Should I take it back?
    ->no no, nevermind
        OK?
        ->it's fine, forget it
    ->I just feel like it's more of a reflex than a real apology
        Just because I can't read your mind doesn't mean I can't feel sorry for making your childhood confusing!
        ->I didn't say you made it confusing
        Well I'd imagine I was a contributing factor
        ->fair, sorry for being snappy
->yeah?
    Yes.
    ->mmhm
        I am, if I unintentionally made your childhood confusing
        ->I didn't say you made it confusing
        Well I'd imagine I was a contributing factor
        ->fair, sorry for being snappy
    ->thank you
->it's not your fault
    No?
    ->at least not yours alone
    Right.
    ->I mean you were going through some shit too
        I guess, yeah.
        ->haha you guess?
            What’s that supposed to mean?
            ->no nothing, nevermind
        ->right

<<if $lullaby == "moon">>
<<pause 3 minutes>>
<<jump moonsong>>
<<elseif $lullaby == "river">>
<<pause 3 minutes>>
<<jump riversong>>
<<elseif $lullaby == "night">>
<<pause 3 minutes>>
<<jump nightsong>>
<<endif>>
===

title:moonsong
---
Flying high all round and bright
->what?
All alone in deepest night
It’s Ms. Moon!
<<jump ghosts2>>
===

title:riversong
---
I want to float away with you
->what?
Out into the ocean blue
It's Sister River!
<<jump ghosts2>>
===

title:nightsong
---
Don't you know you scare me so
->what?!
Where did all your manners go?
It's Dear Night!
<<jump ghosts2>>
===

title:ghosts2
---
!
->oh right. it's kind of depressing
Hm
->I mean "Ghosts" is too, I just looked up the lyrics (didn’t know the band was called Japan, the more you know)
Yeah that one definitely is a bit melancholic
->but the lullaby too
I'm not sure I agree
->I mean I guess a lot of old songs and nursery rhymes are pretty fucked up
Like what?
->I'm pretty sure ring around the rosie is about small pox or something
What??
->or the Plague
You're kidding
->"ashes ashes we all fall down"
Well when you say it like that
->haha I mean it's probably bullshit but I don't know, so many of those sound so mournful
Hm
->but you were always into that kind of thing
What's that supposed to mean?
->sad stuff
Sad stuff?
->yeah, like sad songs about regret and that
Huh.
<<if $lullaby == "moon">>
->and loneliness
I always thought Ms. Moon sounded kind of playful
<<elseif $lullaby == "river">>
->and being washed away
I always thought Sister River sounded kind of playful
<<elseif $lullaby == "night">>
->and being scared
I always thought Night sounded kind of playful
<<endif>>

->I'm not saying they can't be both, just that "sad and kind of scary but also playful and sweet" is a lot to unpack for a kid
Yeah.
->hell, I still have boxes lying around I haven't gotten to, some I haven't even touched yet, so "simple" didn't really resonate
Well you recently moved, right?
->so?
The boxes
->that was a metaphor
That was a joke
<<pause 2 hours>> 
<<jump storytime>>
===

title:storytime
---
<<send_game isyc_thrust>>
Night out!
->hey, how are you today?
One sec
<<pause 2 minutes>>
<<jump storytime2>>
===

title:storytime2
---
Sorry
I'm alright, thanks for checking in.
->sure thing
A bit up and down today
->it sounds like you've got a more solid baseline though
Oh hm
->no?
Maybe! Funny you'd say that.
->why?
Just based on the last few days?
->yeah I guess. you've been pretty responsive
Yeah
->but also I guess whenever I've heard something from you the last few years I feel like you've been more stable
Did you use to think of me as unstable?
->you had a lot going on
    That sounds like a yes.
    ->I don't know, do you not feel like you've gotten, like overall a little more happy? I think you could be unpredictable
    Oh sweetie
    ->what?
    It's just a little painful
    ->what do you mean?
    To hear you say that, like I couldn't provide you with a stable environment.
    ->hey, it takes a village, right?
    Haha
    ->but do you know what I mean then, when I say you've seemed more solid?
->no, I mean, not like unwell
    <<set $stable to "unwell">>
    Oh wow
    ->no really, come on, I'm not calling you crazy
    This is escalating quickly.
    ->I'm not trying to! I mean it
    You're right, I'm sorry.
    ->well?
    Unwell
    ->haha but do you know what I mean?

Yeah, I suppose I do.
->and?
And?
->well what are your thoughts on that?
A bit late in the evening for a surprise therapy session, don't you think?
->oh come on
I'm just joking.
->but I'm not! I'm curious
I am too. Why the sudden interest?
->what's that supposed to mean?
It just makes me wonder what's been going on with you.
->what does?
I mean we haven't talked this much in ages. And we've slipped into a very normal sort of conversation and you're reaching out to ask how I'm doing. It's all very fast in a way.
->I'm sorry, I didn't mean to overwhelm you
That's not what I'm saying!
->but?
Just that it's a bit
surreal maybe
I'm not sure what I'm trying to say.
->me neither
How was your day?
->haha
What?
->good swerve
<<if $stable == "unwell">>
<<jump unwell>>
<<else>>
Well?
->ok, I guess. Busy busy
<<jump storytime3>>
<<endif>>
===

title:unwell
---
Well?
->unwell
Oh!
->no just kidding. dumb joke
It's ok haha.
->ok, I guess. Busy busy
<<jump storytime3>>
===

title:storytime3
---
Hahaha
->what??
I get it.
->get what?
You want to know if it gets better.
->oh
I can tell you this much – working all the goddamn time certainly didn't help. I get the impression you're throwing a whole lot into your work even though you're doing alright for yourself
->but you had to
I guess.
->because of me
Given where I was at, I would have had to work hard either way.
->but it can't have helped
I know what you mean, and of course another mouth to feed is another mouth to feed, but that's still not entirely true.
->how so?
You don't think you ever helped?
->I don't think the proceeds from our lemonade stand made that big of a dent in the rent
Hahaha but you were oh so proud of what you earned all by yourself! That was the cutest thing.
->did I do that on my own?
Sure did, you even made the lemonade on your own. You insisted on it. Little business tycoon.
->did you know that there's a computer game of that?
Lemonade stand?
->yeah it's even called Lemonade Tycoon haha
Oh that's funny. It was funny how you could be playing and also taking it so seriously at the same time.
->oh that's a strange concept to you?
No but I wanted to make sure you knew you were often of great help
->uh-huh?
Yes, and often very independent.
->didn't always have a choice
That's true.
I always thought it was sweet, but that does cast a different light on it.
->look I'm not trying to problematize everything. me helping you can still be sweet
😁
Remember your first time making casserole?
->hmmm
Let me be more specific: Chop Chop Chicken Stickin' Cheese Please oh no I forget the rest!
->hahaha
See?
->Party Platter
->Everything-but-fish Dish
->Noodle Skidoodle

Exactly!
->haha yes I do
You made enough for days of leftovers
->true
Which was not only super sweet but also incredibly practical
->what do you mean?
Well I wasn't exactly in a state to cook or go out and get anything
->huh
You told so many stories. I don't know where you came up with all that.
<<if $lullaby == "moon">>
I mean of course, some of the classic characters were there: Ms. Moon, Old Maggie, Pedro Piglet
<<elseif $lullaby == "river">>
I mean of course, some of the classic characters were there: Sister River, Old Maggie, Pedro Piglet
<<elseif $lullaby == "night">>
I mean of course, some of the classic characters were there: Dear Night, Old Maggie, Pedro Piglet
<<endif>>

<<typing 180>>
But that whole long weekend when I could barely say a word, you filled the apartment with story and song and laughter. It was all a game to you. And you made it feel like I was playing with you, even though I was tucked so far away inside myself. The casserole didn't even get old. I mean, it was a bit of a grab-bag of everything you could get your hands on in the kitchen, so some bites were tastier than others. But you kept heating up small plates whenever it was time for a meal and it was always like a light in the dark for me. In hindsight I should have been a little more skeptical of things like the chicken being cooked through all the way (not that I was in a condition to be picky), but as far as I remember, it really was edible. Not sure how you knew how to do all that. Or where you got the recipe haha. Though I'd think that was a special invention for the occasion. I was so scared of you going back to school that Tuesday. What if I still wasn't able to get up? What if I stayed feeling like that? The casserole was also running out and I don't think we had much else to eat. You'd never even been to the grocery store by yourself, but I was seriously thinking of how to give you instructions to go. I woke up at some point in the middle of the night Monday night and could feel myself coming back. I was so relieved and so ashamed and so sad and so proud and so scared and so grateful. I barely stopped crying in time to get myself cleaned up and wake you up for school. To feel so responsible and so helpless at the same time. And yeah, I mean I always knew that it was shit that you had to pitch in so much at that age. That's why I was so moved, so torn up when it all hit me that night. You were so helpful and I felt so bad that I needed your help. And then I went and woke you up and you got up just like at the beginning of every school week, as if nothing was the matter. It was just as much of a hassle to get you out of bed as on a normal Monday haha. I found some emergency oatmeal and we had breakfast and you recounted all the adventures you'd had with them all as if I'd been along for them as well. Like we were at the end of a three-day-long journey together and now it had come to its natural end because you had to go to school and I'd have to go to work. I didn't end up going to work that day though; I called in sick. I wasn't quite ready yet, even though I was back on my feet. When you left to catch the bus I was so relieved. Not that I was happy to be rid of you or anything, not at all. But it was a relief to know you were in good hands. Out of mine. I remember they were trembling all day. You stayed over at Clarence's that night I think. I missed you. It was suddenly a little scary spending the night all alone at home.
I probably shouldn't be telling you all this like this.
<<pause 2 minutes>>
<<jump storytime4>>
===

title:storytime4
---
I'm sorry.
It was just so magical. You were. Best in the game.
->undefeated to this day
Haha.
Oh, dear.
->that's a lot
I'm sorry.
->no
Really.
->no, really
Thank you.
<<send_game isyc_platformer>>
<<pause 5 minutes>>
<<jump fight>>
===

title:fight
---
Are you planning anything for your birthday?
->I don’t know, probably something small. haven’t really gotten around to thinking about it 
Still not that much of a birthday person? I think you should do something. Invite friends, have a nice meal. 
->oh funny, I just realized that I have a date then and didn’t even notice I’d made it on my birthday
Did you and En break up!?
->no?
Then she would probably love to spend your birthday with you. 
->I mean we’ll probably get breakfast or something together. It’s a Saturday this year. 
That’s nice. 
->the date’s in the evening. I think it’s kind of a fun idea for a birthday actually. 
Oh?
->it’s at a kind of fancy place and a new and exciting thing, which I feel like I haven’t had in a while.
Well, I’m glad you’re excited. But don’t underestimate how special birthdays can be to people.
->my birthday? 
Yeah. It’s always a little milestone. A chance to show your love for someone and to make their day special. You always got so excited about it when you were little. Couldn’t sleep for days. You’d wake up so early – I had to have everything ready the night before. That only changed when you became a teenager. Still don’t understand what happened for you to lose that joy. 
->wait you know En and I aren’t monogamous, right?
I just think committing to spending a birthday together wouldn’t immediately transform you into an old married couple. It might be nice. But I know you don’t care for traditional things like that. Learned that lesson when you missed my party for that date haha. 
->whoa whoa slow down.
Ok.
->I just wanted to clarify because it took me a minute to realize why you might’ve thought En and I broke up. 
Right.
->quite the leap from “how did you grow out of your childhood exuberance?” 
Well?
->(a bit of a one-dimensional take on little me but I’ll allow it here), to assuming I intentionally skipped one of your birthdays
I didn’t say you skipped it intentionally. 
->just because I’m just so darn mad at the reactionary politics of Big Birthday
All I meant is that it’s less important to you.
And don’t act like it’s always easy to understand what exactly might be very reactionary to you. Sometimes I do get surprised by it. But I guess, we just spend our time thinking about different things. 
->another victim of the woke brigade
🙃
->no just kidding
Haha.
-> AAA insert voice message "Sprachi9" BBB
<<pause 1 minutes>>
<<jump fight2>>
===

title:fight2
---
I’m not criticizing being woke! This is not about progressive politics. I’m not asking for more border control here. I’m just saying that it’s not always easy to follow what’s normal to you and what is wrong. It’s hard to keep up sometimes. I am trying to learn.
So a. I’m not questioning your relationship. En is a wonderful woman and you are welcome to visit any time. b. Mourning is part of being a parent. And c. I was just joking. I mean, it really hurt me then, but I know you were a very independent kid and you wanted to hang out with your crush and didn’t want to discuss it with me. But that’s part of being a parent too. Letting your children go is just hard. 
->look, you don’t need to worry that I have this image of you as an old right-wing creep or anything. 
I’d hope not.
->I do think you contrasting “normal” and “wrong” is part of how our opinions diverge, but that’s different. I’m glad you like En
I do.
->ok no hold on then what the fuck was this all about? This is something I can’t stand. 
What??
->When you just kind of say shit without really thinking about what you’re saying or why or what you’re trying to get at. 
Sorry?
->it’s always some off-the-cuff emotional response that doesn’t _actually_ mean anything, but you also get mad if I don’t engage. 
No, that’s not right.
->but communication is an active fucking verb 
OK.
->it’s not just something that magically happens when you just open your mouth and spill stuff out on the person in front of you.
This is really not fair.
I am just trying to get to know your personal life a little more. And I wonder what’s changed since we last saw each other. But you just keep getting stuck on these ways I remember you wrong, I bring up stories wrong, I am happy for you wrong, I worry about you wrong. You question the way I love you, without giving me anything to hold on to. Do you just want to write the script of how it all went, all by yourself? Should we just cross out all the nice memories and agree on your childhood being this cold time with an empty parent? Oh, but I mustn’t worry, because you don’t think I’m a right-wing creep? Forgive me if I can’t match your ability to communicate (verb).  
->”cold time with an empty parent” are your words, not mine. 
Paraphrasing.
->And I’m not really sure where this is coming from now. Is this all just us working through your guilt?
Guilt? Look at you, deflecting this way and that.
-> AAA insert voice message "Sprachi10" BBB
<<pause 2 minutes>>
<<jump fight3>>
===

title:fight3
---
I think we’re talking about different birthdays.

<<if $pw == "winter">>
->but then you got back up and knocked on my door with two cups of cocoa and told me it was snowing
No.
->and took me outside and we played Snowflake Sagas until one in the morning, pointing and laughing and coming up with icy dramas
<<elseif $pw == "spring">>
->but then you got back up and knocked at my door saying it was Spring Equinox and that the ghosts were particularly close 
Oh. 
->and so you set up a ring of candles and we played Spooky Seance until like one in the morning
No.
->creeping each other out and cracking each other up and doing silly voices
<<elseif $pw == "summer">>
->but then you got back up and knocked at my door and said we had to go outside RIGHT THIS MINUTE
Oh.
->and I was scared at first but then I saw all the lightning bugs in the late summer dusk and we played Twilight Chasers 
Hm..
->until it got so dark we couldn’t see anything anymore and were exhausted and a bit scraped up 
No.
->but I remember seeing our big dumb satisfied smiles beaming back at us from the hallway mirror when we came back inside 
<<endif>>

I didn’t spend that night at home.
->what?
I was angry but then I decided to have a good time anyway. So my friends took me out dancing after you’d gone to bed and I only came back in the morning. 
->no.
Yes. Try to make me feel bad for it, call me absent, but you were a teenager and you made it very clear that you could take care of yourself. 
->but I remember that night so clearly.
Look, I really tried my best with you. All the time. But you have to understand what that means: All the time. All the time is aaall the time. 
->yeah no I get it, that’s parenting, right?
Yes.
Even when I was stressed out at work, even if I felt unhappy or sad about myself or life. Even if I felt other people were questioning how I was raising you, even when I was questioning it myself. There were no breaks. And even if every now and then you took a little more responsibility – that didn’t mean I could rest or wasn’t still taking care of you.
->A little more responsibility?
You were a very special kid. You were strong and wanted to be as independent as possible. I remember so many instances where I told you to be careful, to hold back, to stay with me, so you would be out of harm's way. But you rarely ever listened. You went right into challenges I would have never been able to tackle at that age. 
->but I don’t think that’s true at all!
No?
-> AAA  insert voice message "Sprachi11" BBB
<<pause 2 minutes>>
<<jump fight4>>
===

title:fight4
---
Oh!
->huh?
No, sorry, I’m just taking it in and it’s not very easy, haha. 
I think I understand what you mean with my having a kind of misguided sense of how to best protect you. 
I mean, still I think kind of on par for the time, but I know that’s not really your point.
->it’s not
No, no, I know.
->were you relieved that I was so “independent”?
Why?
->like that it meant it was ok that you didn’t always have to be 100% present
Oof.
->sorry look I’m not trying to hurt you
I know.
It still hurts though.
->i’m sorry
What’re you gonna do, right?
->i guess
You have such different memories of me and some of them I can’t even place myself in…
<<if $pw == "winter">>
->like Snowflake Sagas on your birthday?
<<elseif $pw == "spring">>
->like Spooky Seance on your birthday?
<<elseif $pw == "summer">>
->like Twilight Chasers on your birthday?
<<endif>>
Exactly. Which really must have been a different night.
->when though? I remember the surprise of you coming to my room after I thought it was over
Over?
->between us
What???
->it was your birthday and I’d ruined it! And it wasn’t the absolute easiest of times for us
Oh sweetie
->and then you came back and I hadn’t seen you like that, like just purely fun and loving and generous, in such a while
I certainly would like to remember now.
It’s not easy to hear myself be described like that and feel us both see the distance between me and that version of myself, if it even exists.
Or existed.
->oh that’s not what I intended
But you see it.
->hm
And then to not even share that memory…
->it was really lovely, I can tell you that much
That’s sweet.
->but I mean that was you, just usually not all at once, you know?
Hm
Hard to see right now
->are you ok?
How do you mean?
->you sound a little like you’re starting to fall away
Fall away? 
->you know, into yourself or into wherever it was you went. when you’d get cold. 
Oh.
->I feel like it always started with this feeling that you were starting down a spiral or like starting to fall and then giving into the gravity more and more. 
Hm.
->And I thought that might be happening right now. 
So what to do?
->try to not lean into it? if you can? just take my word for it and don’t try to think too much about it
Ha.
->about the holes you could poke in it, all the ways that it’s worse than how I remember, what I’m saying about you. 
<<pause 2 minutes>>
<<jump fight5>>
===

title:fight5
---
Yeah.
->so stay!
<<pause 2 minutes>>
<<jump fight6>>
===

title:fight6
---
<<send_game isyc_bathtub>>
<<jump arcade>>
===

title:arcade
---
I’m going to put my phone away now and it’s not very easy to formulate right now but thank you and I hear you I’m going to go for a walk and try to clear my head I’m not mad I’m just trying to do what you said and try to stay upright
->oh my god
What is it?!
->did we ever like
What????
->huh
??
->no sorry I have a memory that I’ve kind of always held at a sort of associative remove 
Of what?
->which must be because it makes less and less sense the more I think about it, now that I’m thinking about it. 
Oh?
->which I feel like I’m doing for the very first time right now
Spit it out!
->haha yeah ok I could SWEAR that the two of us like… lol this sounds so weird.
…
->did we reserve the arcade for a sleepover? like for the two of us?
Oh.
->haha that’s not a thing people do! or arcades offer!
Well, no.
->what?
First of all no, it isn’t something they offer, of course.
-> AAA insert voice message "Sprachi12" BBB
<<pause 1 minutes>>
<<jump arcade2>>
===

title:arcade2
---
No, honey.
->but that can't have been you, right?
No.
->but it can't _not_ have been you, I mean like 80 Plays is a game we came up with together
It is?
->and I never went to the arcade with anyone else and I mean most of the time you'd wait outside. no, you _never_ came inside
Right.
-> AAA insert voice message "Sprachi13" BBB
<<pause 1 minutes>>
<<jump arcade3>>
===

title:arcade3
---
Yeah.
->but you can't just spend the night at the arcade
No, it's not allowed.
->and if we were avoiding the guards, did we _sneak into the arcade_???
Sweetie no, no we didn't.
->then who did?
No one did!
->but if you weren't there, how would you know whether I snuck in with someone or not?
Because you were there alone
->this is driving me crazy
Well
->wait what?
It was just you.
->you just said no one snuck in
No one did. But you were there on your own once.
->what???
I was never sure if you remembered
->like I said, only sort of. but I wasn't alone!
You were.
I fucked up.
->sorry explain
I will if you give me a chance
->spit it out!
Oh I'm so sorry.
Margret was supposed to pick you up and take you to Clarence's
->?
I dropped you off and when I realized I wouldn't make it in time before the mall closed I asked Margret but she must've never gotten the message.
<<typing 10>>
And then I showed up at Clarence's in the morning and you weren't there and they hadn't heard anything or seen Margret and then I went to Margret's but she wasn't even home and I was already panicking and then I went to the mall which was just opening because it was the weekend
And the arcade wasn't even open yet and no one came even though I was banging on the glass doors
The lights were on but there was no one there.
So I was standing in the food court having a nervous breakdown when I heard you call my name.
You were with one of the cleaning staff.
She'd found you curled up sleeping under the air hockey table in the arcade all alone.
You were confused why I was crying.
And then we left.
I think I gave her like 40 bucks so she wouldn't call
I don't know
Child Protection
->jesus
*the woman who found you I mean
Yeah.
->you're shitting me
I'm not.
->hm
I'm still so sorry
->yeah
And you remember someone there with you?
->give me a minute
<<pause 10 minutes>>
<<jump arcade4>>
===

title: arcade4
---
You there?
->yeah
Are you sure you didn't dream that? I know you slept there. 
->well now I don't fucking know what did or didn't happen
You probably fell asleep pretty early in the night.
->yeah if it makes you feel better
    ?
    ->we'll say I fell asleep right away
    You don’t think so?
    ->just accepted that I'd be spending the night alone locked in the arcade and curled up and said good night?
->sleeping was never really my go-to activity, especially in a place that exciting. or scary, given
    Maybe it was an exhausting day or just a very special situation?
    ->I don't think I slept early though.

OK nevermind.
->I have so many questions
Mmhm
->you know?
Of course.
->I mean first off what the fuck
I
->and
?
->what the _fuck_?
I don't know what to say.
->I mean try telling the story so it doesn't make you sound like the victim
    That's not at all my intention!
    -> AAA insert voice message "Sprachi14" BBB
    <<pause 15 seconds>>
    Look
    ->yeah?
->I guess the situation is pretty straightforward. 
    Oh?
    ->You were overwhelmed and I got stuck at the mall and had a jolly old time with a janitor or a cashier. or a ghost. who's to say
    It shouldn't have happened. But I'm sure no one was there. Sometimes memories get mixed up.
    ->I don't know. Doesn’t seem to have scarred me, so…
    How do you feel now?
    ->Confused. why?
    ->Lonely. why?
<<pause 1 minutes>>
<<jump arcade5>>
===

title:arcade5
---
I don't know. There's nothing I can say to make it better
->no excuse?
What do you want to hear?
->don't. I don't know
There were some states it was important that you didn't see me in
->important to who?
Both of us
->and that was your decision?
It was.
->but you crying and pounding on the glass calling my name was fine for me to see?
So you do remember?
->I don't. Like I said, I don't really have a memory of before or after. Just that you were in the arcade with me.
Right.
->and we stayed up all night. and played all of our favorite games. and you were there and happy and bright. with me.
I'm sorry.
<<pause 4 hours>>
<<jump arcade6>>
===

title:arcade6
---
Hey are you there?
<<pause 15 seconds>>
<<jump arcade7>>
===

title: arcade7
---
Sweetie?
->yeah
I just drove to the old mall.
->uh huh. you said they're tearing it down
Yeah.
->ok
I don't know I just didn't feel good and got stuck on what you said you remembered
->yeah?
And so I found myself standing outside
Next to the old food court entrance, where there are windows into the arcade, you know?
->yeah
And I was trying to look throught them
->still standing
Huh?
->the arcade, it's still standing? they haven't torn it down yet?
Yeah
No.
It's still there. But closed. Permanently I guess.
->ok
I remember too
->what?
I remember too. Dancing, hiding, playing
->what are you talking about?
What did you call it?
Dance Dance Revolution
->yeah?
Those platforms with the arrows, forward, left, right, back
->yeah
You showed me your trick. Holding on with your hands so you can jump easier
->right yeah I guess I must have at some point
No I mean that night
->?
And then we tried it
First holding onto the bar with our hands and jumping and dancing our feet between the arrows as quick as we could even though the game was off
And then we realized you could just go down on all fours
->oh haha
And then you could hit all four at the same time and we sort of crab-danced in circles hitting all the arrows.
->yeah until you got tied in a knot and fell down
But you kept going faster and then you even flipped over into the bridge and kept going
->haha
Show-off
->kids are bendy, huh?
I mean that didn't last long
->agree to disagree
	?
	->nevermind. other kind of bendy. so you do remember?
->wait so you do remember now!

No I don't.
->then what the fuck are you talking about? what is this?? some fucked up amateur psychoanalysis by proxy??
No, I wasn't there.
I wasn't there.
I didn't come pick you up.
I did tell Margret.
No one else.
Made some stupid excuse with Clarence’s that I just mixed up friends' houses
She never really forgave me for that.
Margret.
Heard the message eventually and said I was lucky if you forgot about it all.
->I didn't
Well
->no I didn't, you just said you remembered it too!!
Just in that moment. When I was standing there. I could see us. You won Around the World in 80 Plays. Got it in 73.
->I did
I can't explain it
->clearly
I just
->yeah?
You're not crazy.
->I didn't say I was?
No, I know.
->so?
You needed me.
->can't help but notice the past tense

<<send_game "memory">>
<<pause 1 hours>>
<<jump thirdperson>>
===

title:thirdperson
---
Hey
->hey
How are you holding up?
->ok
OK like OK or OK like bad?
->ok like pretty good
    <<set $okok to "prettygood">>
    That's good to hear!
    ->yeah. you?
->ok like ok
    <<set $okok to "ok">>
    I hear you
    ->yeah a little unsettled. in like a bunch of different meanings of the word
    Uh-huh
    ->you?
->ok like not so good
    <<set $okok to "notsogood">>
    I'm sorry
    Same here
Not so good
->hm. where are you?
Home. You?
->outside
Walking?
->yeah. fresh air, hoping to clear things up in there
In your head?
->yeah. in ours I guess
Right.
->I feel like I just found out about another parent I didn't realize I had except for it's just also you
Ha
<<if $okok == "prettygood">>
And that feels good?
->yeah
Huh
That's good I guess
->haha
🙂
<<elseif $okok == "ok">>
And that's unsettling?
->I mean yeah
Yeah
<<elseif $okok =="notsogood">>
Yeah that sounds tough
or confusing at the very least
->yeah
Mmhm.
<<endif>>
->I mean that's not really it though, not quite. can I call you?
It's a little late here.
->right
Alma has gotten even more sensitive about noise.
->oh god
I can't walk around with shoes on after eight or she'll call the super.
->haha what are they supposed to do?
I don't know. But I don't really want to find out. Sounds like a hassle.
->not being able to talk on the phone because your unhinged neighbor is a light sleeper sounds like a hassle
I manage.
->right. and what's keeping you up?
Well I guess I feel like I just found out about a co-parent I didn't realize I had except for it was just also me.
->ha!
But really more like you
->what do you mean?
Doesn't it sound a bit like an imagined, I don't know, alternative me?
->huh
Like you couldn't bear the thought of my having abandoned you, so you pretended I didn't?
->in a way
Yeah so that's, you know, not a great feeling
->but I don't think they replaced you in my mind. like, I have memories of the three of us
You do?
->you know, like the casserole week
With the me that wasn't in bed, more or less unresponsive, for three straight days?
->well yeah, right
So an imaginary friend, instead of a replacement?
->haha
Full house.
<<if $lullaby == "moon">>
->you, me, Ms. Moon, Old Maggie, Pedro Piglet, you...
<<elseif $lullaby == "river">>
->you, me, Sister River, Old Maggie, Pedro Piglet, you...
<<elseif $lullaby == "night">>
->you, me, Dear Night, Old Maggie, Pedro Piglet, you...
<<endif>>

Huh
Haha
->mayble like an extension
Hm?
->of you, instead of a replacement
Oh.
->no?
No no, I'm just thinking too.
An extension.
->yeah
A part of me?
->probably a question of how you look at it
I really saw us.
->in the old arcade?
Yeah.
->yeah I don't know what to do with that to be honest
The ghosts of my life
->shit
What?
->no I just
Yeah?
->I don't know what i think about that
Yeah.
Well
That's something.
->yeah. well so that's who
It's still upsetting to me.
<<if $okok == "prettygood">>
->it shouldn't be
    Thanks.
    Is it not to you?
    ->hm I don't know, still digesting I guess
    Makes sense.
    ->also something light?
    ?
    ->like to how I'm feeling
    Oh, that's nice.
    ->yeah
    Good.
->yeah I get it
    Not to you?
    ->not sure yet really
    Right.
    ->still digesting I guess
    OK.
    ->yeah?
    No I mean let me know how it develops for you
    ->ok yeah
->why?
    <<jump why>>
<<elseif $okok == "ok">>
->hm
    Hm.
    Not to you?
    ->still digesting I guess
    Right.
->well yeah
    You're saying it should be?
    ->I'm just saying I get it if there's some guilt there.
    Gee thanks.
    ->oh come on, I'm not trying to guilt-trip you, I'm just saying I get it.
        Right.
    ->oh come on, what am I supposed to do, tell you everything's fine and always has been? That you were perfect?
        No.
        ->no?
        No I don't expect that from you.
        ->good.
->why?
    <<jump why>>
<<elseif $okok == "notsogood">>
->well yeah
    You're saying it should be?
    ->I'm just saying I get it if there's some guilt there.
    Gee thanks.
    ->oh come on, I'm not trying to guilttrip you, I'm just saying I get it.
        Right.
    ->oh come on, what am I supposed to do, tell you everything's fine and always has been? That you were perfect?
        No.
        ->no?
        No I don't expect that from you.
        ->good.
->same
    I'm sorry.
    ->I mean, probably not exactly the same
            What do you mean?
            ->just that this is probably affecting us differently
            Yeah
    ->haha for all of it, or just that I'm upset now?
        Oh great.
        ->loosen up, I'm just joking
        Yeah?
        ->yes. I mean I get it if you're feeling guilty or whatever, but I'm not trying to guilttrip you
        Thanks.
        ->yeah
            Hm.
        ->oh come on, what am I supposed to do, tell you everything's fine and always has been? That you were perfect?
            I meant it.
            ->ok
                OK.
            ->whatever
                Typical.
                ->are you serious??
            ->sorry
                I wouldn't expect that of you.
                ->I know
                ->good.
    ->me too
        You shouldn't be.
        ->hm
->why?
    <<jump why>>

<<endif>>
<<jump who>>
===

title:why
---
Why I find it upsetting?
->yeah
Because what better sign could there be that I wasn't there when you needed me that you had to invent an additional me that didn't fuck up as much?
->I guess
    You see?
    ->I mean, what do you want me to say?
    I don't know.
    ->well me neither
    Yeah.
->I don't think that's the only way of looking at it
    No?
    ->no, I mean if you look at the casserole days, it was also a way to not be upset about seeing you in such bad shape
    Huh
    ->you know what I mean?
    Yeah, I mean that's also pretty fucked up to be honest, but I guess it's less damning
    ->haha
    What?
    ->that sounded a little like me
    <<pause 8 minutes>>
    😊
<<jump who>>
===

title:who
---
Wait what did you mean "so that's who"?
->not sure. I guess I've been having a tip-of-the-tongue kind of feeling
Ah.
->yeah and now it's like oh that's what I meant. or who.
Hm.
->I mean I don't know. like, it's fleeting. hard to pin down
Yeah.
->but there's something right about it?
<<pause 1 minutes>>
<<jump who2>>
===

title:who2
---
Oh.
->yeah?
Is that who you wish you were talking to?
->what??
Oh you know
->I don't
Well I just thought maybe that's why you've been so in touch
->come on
What?
Isn't that what you were looking for?
->I don't know. what do you mean looking for?
No?
You've been obsessed over old stuff this last week 
->oh come on, obsessed?
Well you keep asking and there's all these gaps.
In your memories, in mind, between them
and I just thought it felt like you were stuck.
Like on a knot or something.
->huh
I mean you more or less said so yourself
->yeah I guess
See?
->ok but that doesn't mean
?
->I don't know. I guess so
You guess so what?
->yeah, I guess in way, that's who I was looking for
Looking through me
->I'm sorry
    I'm sorry you're stuck with me.
    ->I'm not!
        No?
        ->no, I don't think it's just one or the other
        What do you mean?
        ->that I meant when I said I felt like this was still part of you or of you or something
        An extension
        ->yeah
        Hm
        ->is that something you can work with
        For now?
        ->yeah
        OK, for now. 
    ->jesus fucking christ
        How would you feel?
        ->no I get it
            Yeah?
            ->I do. 
                OK.
                ->just let's take a break, please
                OK.
                Yes.
            ->I just wish you wouldn't make it all about you
                You're not being fair!
                ->please let's take a break
                OK.
                Yes.
        ->it's just all this fucking guilt 
            Sorry?
            ->just being thrown around, I can't anymore
            You're not being fair!
            ->no you know you're right I wish it wasn't you on the other end, not this you
->no
    No?
    ->no, I really meant when I said I felt like this was still part of you or of you or something
    An extension
    ->yeah
    Hm.
    ->is that something you can work with?
    For now?
    ->yeah
    OK, for now. 
->what do you mean?
    It just makes me feel a bit a bit see-through, I guess.
    ->jesus!
        How would you feel?
        ->no I get it
            Yeah?
            ->I do. 
                OK.
                ->just let's take a break, please
                OK.
                Yes.
            ->I just wish you wouldn't make it all about you
                You're not being fair!
                ->please let's take a break
                OK.
                Yes.
        ->it's just all this fucking guilt 
            Sorry?
            ->just being thrown around, I can't anymore
            You're not being fair!
            ->no you know you're right I wish it wasn't you on the other end, not this you
    ->look, I'm sorry
        I'm sorry you're stuck with me.
        ->I'm not!
            No?
            ->no, I don't think it's just one or the other
            What do you mean?
            ->that I meant when I said I felt like this was still part of you or of you or something
            An extension
            ->yeah
            Hm.
            ->is that something you can work with?
            For now?
            ->yeah
            OK, for now. 
        ->jesus fucking christ
            How would you feel?
            ->no I get it
                Yeah?
                ->I do. 
                    OK.
                    ->just let's take a break, please
                    OK.
                    Yes.
                ->I just wish you wouldn't make it all about you
                    You're not being fair!
                    ->please let's take a break
                    OK.
                    Yes.
            ->it's just all this fucking guilt 
                Sorry?
                ->just being thrown around, I can't anymore
                You're not being fair!
                ->no you know you're right I wish it wasn't you on the other end, not this you
    ->no!
        No?
        ->no, I really meant when I said I felt like this was still part of you or of you or something
        An extension
        ->yeah
        Hm.
        ->is that something you can work with?
        For now?
        ->yeah
        OK, for now. 
===`;
