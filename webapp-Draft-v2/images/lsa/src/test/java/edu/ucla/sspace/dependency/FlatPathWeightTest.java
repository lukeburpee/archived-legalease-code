/*
 * Copyright 2010 Keith Stevens 
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

package edu.ucla.sspace.dependency;

import java.util.List;

import org.junit.Ignore;
import org.junit.Test;

import static org.junit.Assert.*;


public class FlatPathWeightTest extends AbstractPathUtil {

    @Test public void testSimplePath() {
        String[][] pathString = {{"cat", "n", "Rel", "dog", "n"}};
        DependencyPath path = makePath(pathString);
        DependencyPathWeight weighter = new FlatPathWeight();
        assertEquals(1, weighter.scorePath(path), .000001);
    }

    @Test public void testLongPath() {
        String[][] pathString = {{"cat", "n", "Rel", "dog", "n"},
                                 {"dog", "n", "noarelation", "whale", "n"},
                                 {"whale", "n", "noarelation", "pig", "n"}};
        DependencyPath path = makePath(pathString);
        DependencyPathWeight weighter = new FlatPathWeight();
        assertEquals(1, weighter.scorePath(path), .000001);
    }
}
