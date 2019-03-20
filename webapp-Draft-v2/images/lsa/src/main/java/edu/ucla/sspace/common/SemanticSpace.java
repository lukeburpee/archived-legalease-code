/*
3 * Copyright 2009 Keith Stevens 
 *
 * This file is part of the S-Space package and is covered under the terms and
 * conditions therein.
 *
 * The S-Space package is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 2 as published
 * by the Free Software Foundation and distributed hereunder to you.
 *
 * THIS SOFTWARE IS PROVIDED "AS IS" AND NO REPRESENTATIONS OR WARRANTIES,
 * EXPRESS OR IMPLIED ARE MADE.  BY WAY OF EXAMPLE, BUT NOT LIMITATION, WE MAKE
 * NO REPRESENTATIONS OR WARRANTIES OF MERCHANT- ABILITY OR FITNESS FOR ANY
 * PARTICULAR PURPOSE OR THAT THE USE OF THE LICENSED SOFTWARE OR DOCUMENTATION
 * WILL NOT INFRINGE ANY THIRD PARTY PATENTS, COPYRIGHTS, TRADEMARKS OR OTHER
 * RIGHTS.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

package edu.ucla.sspace.common;

import edu.ucla.sspace.text.TokenProcesser;
import edu.ucla.sspace.text.Corpus;

import edu.ucla.sspace.vector.Vector;

import java.io.BufferedReader;
import java.io.IOException;

import java.util.Properties;
import java.util.Set;


/**
 * A common interface for interacting with semantic space models of meaning.
 * Implementations should expect the following sequence of processing.
 *
 * <ol>

 * <li> {@link #process(Corpus) process} will be called
 *      one or more times with the text of the corpora to be processed.
 *
 * <li> {@link #build(Properties) processSpace} will be called after all
 *      the documents have been seen.  Once this method has been called, no
 *      further calls to {@code process} should be made.
 *
 * <li> {@link #getVector(String) getVector} may be called after the space has
 *      been processed.  Implementations may optionally support this method
 *      being called prior to {@code build} but this is not required.
 *
 * </ol>
 *
 * In addition, {@link #getWords()} may be called at any time to determine which
 * words are currently represented in the space.  Implementations are encouraged
 * to override the {@code build} method with a method that has concrete, typed
 * parameters and then specify in the interface implementation how these
 * parameters are converted from properties for the {@code build} method, and
 * what the default value of those parameters are.
 */
public interface SemanticSpace {

    
    /**
     * Once all the documents have been processed, performs any post-processing
     * steps on the data.  An algorithm should treat this as a no-op if no
     * post-processing is required.  Callers may specify the values for any
     * exposed parameters using the {@code properties} argument.
     *
     * <p>
     *
     * By general contract, once this method has been called, {@code
     * processDocument} will not be called again.
     *
     * @param properties a set of properties and values that may be used to
     *        configure any exposed parameters of the algorithm.
     */
    void build(Properties properties);

    /**
     * Returns the current {@code TokenProcesser} used by this algorithm for
     * converting the raw text of a corpus into tokens.
     */
    TokenProcesser getTokenProcessor();
    
    /**
     * Returns the set of words that are represented in this semantic space.
     *
     * @return the set of words that are represented in this semantic space.
     */
    Set<String> getWords();

    /**
     * Returns the semantic vector for the provided word.
     *
     * @param word a word that may be in the semantic space
     *
     * @return The {@code Vector} for the provided word or {@code null} if the
     *          word was not in the space.
     */
    Vector getVector(String word);

    /**
     * Returns the length of vectors in this semantic space.  Implementations
     * are left free to define whether the returned value is valid before {@link
     * #processSpace(Properties) processSpace} is called.
     */
    int getVectorLength();

    /**
     * Processes the contents of the provided file as a document.
     *
     * @param document a reader that allows access to the text of the document
     *
     * @throws IOException if any error occurs while reading the document
     */
    void process(Corpus corpus) throws IOException;

    /**
     * Sets the current {@code TokenProcesser} used by this algorithm for
     * converting the raw text of a corpus into tokens.
     */
    void setTokenProcessor(TokenProcesser processer);    
}
