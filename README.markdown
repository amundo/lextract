It's a common situation to want to semi-automatically extract text from a semi-structured document into a database.

Case in point: suppose you have a text dictionary like George Gibb's <a title="Dictionary of the Chinook Jargon, or, Trade Language of Oregon : Gibbs, George, 1815-1873 : Free Download & Streaming : Internet Archive" href="http://www.archive.org/details/dictionaryofthec15672gut">Dictionary of the Chinook Jargon, or, Trade Language of Oregon</a>:


> ~Chil-chil~. See TSIL-TSIL.
> 
> ~Chitsh~, _n._ Chihalis, TSHITSH. _A grandmother._
> 
> ~Chope~, _n._ Chihalis, TSHUP. _A grandfather._
> 
> ~Cho'-tub~, _n._ Nisqually, idem. _A flea._ Used on Puget Sound.
> 
> ~Chuck~, _n._ Nootka, CHAUK (Cook); CHAHAK, _fresh water_ (Jewitt); Chinook, TLTSUK (Shortess); Clatsop, TL'CHUKW. _Water; a river or stream._ Salt chuck, _the sea;_ skookum chuck, _a rapid;_ solleks chuck, _a rough sea;_ chuck chahko _or_ kalipi, _the tide rises or falls;_ saghilli _and_ keekwillie chuck, _high_ and _low tide._

It's pretty structured; but we'd like to get it into a lexical database. 

You can probably make some progress with regular expressions as this text is semi-structured. To wit:

* ALLCAPS words in this text seem to all be Nootka etyma
* _italicized_ stuff is a definition
* ~tilde'd~ words are headwords

...and so on.

But it's inevitable that eventually you're going to have to go through the document by hand and edit the content.  

That's where this tool comes in: it helps you to write, run, and test regular expression matching patterns on "chunks" (in this case entries), and thus semi-automatically start to fill out the database from the raw text.
